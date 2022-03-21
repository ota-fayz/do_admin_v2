import { SearchInput, SelectInput } from "react-admin"
import React from "react"

export const Filter = [
    <SearchInput source="q" alwaysOn />,
    <SelectInput allowEmpty={false} source="language" choices={[
        { id: "ru", name: "🇺🇸" },
        { id: "en", name: "🇷🇺" },
        { id: "uz", name: "🇺🇿" }
    ]} />
]
