import React from "react"
import Dashboard from "./pages/Dashboard"
import { Admin, Resource } from "react-admin"
import authProvider from "./auth/authProvider"
import i18nProvider from "./i18n/i18nProvider"
import CustomLayout from "./layour/layout"
import dataProvider from "./http/dataProvider"
import pattern from "./pattern"

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
            <Resource name="pattern" {...pattern} />
            <Resource name="reference" />
        </Admin>
    )
}

export default App
