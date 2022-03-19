// Authenticated by default
import { Auth } from "../interfaces/auth"
import { apiUrl } from "../http/dataProvider"

const authProvider = {
    login: ({ username, password }: Auth) => {
        const request = new Request(`${apiUrl}/token-auth/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then(response => {
                localStorage.setItem("token", response.token)
            })
            .catch(function(error) {
                throw error
            })
    },
    logout: () => {
        localStorage.removeItem("token")
        return Promise.resolve()
    },
    checkError: ({ status }: any) => {
        return status === 401 || status === 403
            ? Promise.reject()
            : Promise.resolve()
    },
    checkAuth: () => {
        return localStorage.getItem("token")
            ? Promise.resolve()
            : Promise.reject()
    },
    getPermissions: () => {
        const token = localStorage.getItem("token")
        return Promise.resolve(token)
    }
}

export default authProvider
