import React, { Children, cloneElement } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
    Datagrid,
    List,
    ShowButton,
    TextField,
    DateField,
    FunctionField,
    SearchInput,
    SelectInput,
    useTranslate
} from "react-admin"
import { getFlagByLang } from "../../helpers/getFlagByLang"
import { getStatus } from "../../helpers/getStatus"

const usePostListActionToolbarStyles = makeStyles({
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: -1,
        marginBottom: -1
    }
})

const ReferenceListActionToolbar = ({ children, ...props }: any) => {
    const classes = usePostListActionToolbarStyles()

    return (
        <div className={classes.toolbar}>
            {Children.map(children, (button) => {
                return cloneElement(button, props)
            })}
        </div>
    )
}

const ReferenceList = (props: any) => {
    const translate = useTranslate()

    const referenceFilter = [
        <SearchInput source="search_word" alwaysOn />,
        <SelectInput
            allowEmpty={false}
            source="status"
            choices={[
                { id: "", name: `${translate("all")}` },
                { id: 0, name: `${translate("awaiting")}` },
                { id: 1, name: `${translate("ready")}` },
                { id: 2, name: `${translate("canceled")}` },
                { id: 3, name: `${translate("deleted")}` }
            ]}
        />,
        <SelectInput
            allowEmpty={false}
            source="doc_type"
            choices={[
                { id: "", name: "All" },
                { id: "reference", name: "Reference" },
                { id: "application", name: "Application" },
                { id: "id", name: "Id" }
            ]}
        />
    ]
    return (
        <List
            {...props}
            filters={referenceFilter}
            exporter={false}
            bulkActionButtons={false}
        >
            <Datagrid rowClick="show">
                <TextField source="id" sortable={false} />
                <TextField source="pattern_name" sortable={false} />
                <TextField source="identity_string" sortable={false} />
                <TextField source="first_name" sortable={false} />
                <TextField source="last_name" sortable={false} />
                <DateField source="date_created" sortable={false} />
                <FunctionField
                    label="language"
                    render={(record: any) => getFlagByLang(record.pattern_lang)}
                    sortable={false}
                />
                <FunctionField
                    label="status"
                    render={(record: any) =>
                        getStatus(record.status, translate)
                    }
                    sortable={false}
                />
                <TextField source="type" sortable={false} />
                <DateField source="date_closed" sortable={false} />
                <ReferenceListActionToolbar>
                    <ShowButton label="" />
                    {/*<DeleteButton undoable={false} label="" />*/}
                </ReferenceListActionToolbar>
            </Datagrid>
        </List>
    )
}

export default ReferenceList
