import React from "react"
import Dashboard from "./pages/Dashboard"
import { Admin, Resource, ListGuesser } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import authProvider from "./auth/authProvider"
import i18nProvider from "./i18n/i18nProvider"
import CustomLayout from "./layour/layout"

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")

function App() {
    return (
        <Admin
            title="Dean's Office - Admin Panel"
            dashboard={Dashboard}

            // Disable req to React Admin - Marmelab
            disableTelemetry

            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            layout={CustomLayout}


        >
            <Resource name="users" list={ListGuesser} />
        </Admin>
    )
}

export default App
