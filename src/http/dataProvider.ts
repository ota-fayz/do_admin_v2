import { fetchUtils } from "react-admin"
import { stringify } from "query-string"

export const apiUrl = "https://dev.polito.uz/api"

const httpClient = (url: string, options: any = {}) => {
    //TODO: Types for options
    options.user = {
        authenticated: true,
        token: `Token ${localStorage.getItem("token")}`
    }
    return fetchUtils.fetchJson(url, options)

}

const dataProvider = {
    getList: (resource: string, params: any) => {
        //TODO: Types for params

        const { page, perPage } = params.pagination

        const query = {
            page_size: JSON.stringify(perPage),
            page: JSON.stringify(page),
        }

        const url = `${apiUrl}/${resource}/?${stringify(query)}`

        return httpClient(url).then(
            ({ headers, json }) => ({
            data: json.results,
            total: json.count
        }))
    },

    getOne: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json
        })),

    getMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids })
        }
        const url = `${apiUrl}/${resource}?${stringify(query)}`
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
        const url = `${apiUrl}/${resource}?${stringify(query)}`

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: 10
            // total: parseInt(headers.get("content-range").split("/").pop(), 10)
        }))
    },

    update: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({ id: params.ids })
        }
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: "PUT",
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({ data: json }))
    },

    create: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: "POST",
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id }
        })),

    delete: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: "DELETE"
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({ id: params.ids })
        }
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: "DELETE",
            body: JSON.stringify(params.data)
        }).then(({ json }) => ({ data: json }))
    }
}

export default dataProvider