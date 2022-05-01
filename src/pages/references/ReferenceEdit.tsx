import React from "react"
import { Edit, SimpleForm, TextInput, SelectInput, required } from "react-admin"
import { ReferenceTitle } from "./ReferenceTitle"

const ReferenceEdit = (props: any) => (
    <Edit title={<ReferenceTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <SelectInput
                source="status"
                validate={required()}
                choices={[
                    { id: 0, name: "awaiting" },
                    { id: 1, name: "ready" },
                    { id: 2, name: "canceled" }
                ]}
            />
        </SimpleForm>
    </Edit>
)

export default ReferenceEdit
