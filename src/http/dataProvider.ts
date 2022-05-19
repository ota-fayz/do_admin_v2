import {
    fetchUtils,
    GetListParams,
    DeleteParams,
    GetOneParams,
    CreateParams,
    UpdateParams,
    HttpError
} from "react-admin"
import { stringify } from "query-string"

export const createHeadersFromOptions = (options: any): Headers => {
    const requestHeaders = (options.headers ||
        new Headers({
            Accept: "application/json"
        })) as Headers
    if (
        !requestHeaders.has("Content-Type") &&
        !(options && (!options.method || options.method === "GET")) &&
        !(options && options.body && options.body instanceof FormData)
    ) {
        requestHeaders.set("Content-Type", "application/json")
    }
    if (options.user && options.user.authenticated && options.user.token) {
        requestHeaders.set("Authorization", options.user.token)
    }

    return requestHeaders
}

export const apiUrl = "https://ref-dev.polito.uz/api/"

const httpClient = (url: string, options: any = {}) => {
    //TODO: Types for options
    options.user = {
        authenticated: true,
        token: `Token ${localStorage.getItem("token")}`
    }

    if (
        url === "https://ref-dev.polito.uz/api/pattern/" &&
        options.method === "POST"
    ) {
        const requestHeaders = createHeadersFromOptions(options)
        return fetch(url, {
            ...options,
            headers: requestHeaders
        })
            .then((response) =>
                response.text().then((text) => ({
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers,
                    body: text
                }))
            )
            .then(({ status, statusText, headers, body }) => {
                let json
                try {
                    json = JSON.parse(body)
                } catch (e) {
                    // not json, no big deal
                }
                let fieldMessage = ""
                json.field_message &&
                    json.field_message.forEach((elem: any, index: number) => {
                        fieldMessage += `${index + 1}. ${elem.message} \n`
                    })
                let plainMessage = ""
                json.plain_message &&
                    json.plain_message.forEach(
                        (elem: string, index: number) => {
                            plainMessage += `${index + 1}. ${elem} \n`
                        }
                    )
                console.log(plainMessage)
                if (status < 200 || status >= 300) {
                    return Promise.reject(
                        new HttpError(
                            fieldMessage || plainMessage || statusText,
                            status,
                            json
                        )
                    )
                }
                return Promise.resolve({ status, headers, body, json })
            })
    }

    return fetchUtils.fetchJson(url, options)
}

const dataProvider = {
    getList: (resource: string, params: GetListParams) => {
        const { page, perPage } = params.pagination
        const { doc_type, status, search_word, language } = params.filter

        const query = {
            page_size: JSON.stringify(perPage),
            page: JSON.stringify(page),
            doc_type,
            status,
            search_word,
            language
        }

        const url = `${apiUrl}${resource}/?${stringify(query)}`

        return httpClient(url).then(({ json }) => ({
            data: json.results,
            total: json.count
        }))
    },

    delete: (resource: string, params: DeleteParams) =>
        //TODO: Why first req method options then delete?

        httpClient(`${apiUrl}${resource}/${params?.id}/`, {
            method: "DELETE"
        }).then(({ json }) => ({ data: json ?? "Success" })),

    getOne: (resource: string, params: GetOneParams) =>
        httpClient(`${apiUrl}${resource}/${params.id}/`).then(({ json }) => ({
            data: json
        })),

    create: (resource: string, params: CreateParams) => {
        const formData = new FormData()
        const { data } = params

        for (const key in data) {
            if (key === "pattern_file") {
                formData.append(key, data[key].rawFile)
            } else if (key === "additional_data") {
                formData.append(key, JSON.stringify(data[key]))
            } else {
                formData.append(key, data[key])
            }
        }

        return httpClient(`${apiUrl}${resource}/`, {
            method: "POST",
            body: formData
        }).then(({ json }) => ({ data: { ...params.data, id: json.id } }))
        // .catch((error) => {
        //     return new Promise(function (resolve, reject) {
        //         reject({
        //             message: "Something went wrong, please try again."
        //         })
        //     })
        // })
    },

    // create: (resource: string, params: CreateParams) =>
    //     httpClient(`${apiUrl}${resource}/`, {
    //         method: "POST",
    //         body: JSON.stringify(params.data)
    //     }).then(({ json }) => ({ data: { ...params.data, id: json.id } })),

    update: (resource: string, params: UpdateParams) =>
        httpClient(`${apiUrl}${resource}/${params.id}/`, {
            method: "PATCH",
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({ data: json })),

    getMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids })
        }
        const url = `${apiUrl}${resource}?${stringify(query)}`
        return httpClient(url).then(({ json }) => ({ data: json }))
    },

    getManyReference: (resource: any, params: any) => {
        const { page, perPage } = params.pagination
        const { field, order } = params.sort
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id
            })
        }
        const url = `${apiUrl}${resource}?${stringify(query)}`

        return httpClient(url).then(({ json }) => ({
            data: json,
            total: 10
            // total: parseInt(headers.get("content-range").split("/").pop(), 10)
        }))
    },

    updateMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({ id: params.ids })
        }
        return httpClient(`${apiUrl}${resource}?${stringify(query)}`, {
            method: "PUT",
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({ data: json }))
    },

    deleteMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({ id: params.ids })
        }
        return httpClient(`${apiUrl}${resource}?${stringify(query)}`, {
            method: "DELETE",
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({ data: json }))
    }
}

export default dataProvider
