import React from "react"
import { Children, cloneElement } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
    Datagrid,
    DeleteButton,
    List,
    ShowButton,
    TextField,
    FunctionField, useTranslate, SearchInput, SelectInput
} from "react-admin"
import { getFlagByLang } from "../../helpers/getFlagByLang"

const usePostListActionToolbarStyles = makeStyles({
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: -1,
        marginBottom: -1
    }
})

const PostListActionToolbar = ({ children, ...props }: any) => {
    const classes = usePostListActionToolbarStyles()

    return (
        <div className={classes.toolbar}>
            {Children.map(children, button => cloneElement(button, props))}
        </div>
    )
}

const PatternList = (props: any) => {
    const translate = useTranslate()

    const Filter = [
        <SearchInput source="q" alwaysOn />,
        <SelectInput allowEmpty={false} source="language" choices={[
            { id: "ru", name: `🇺🇸 ${translate("english")}` },
            { id: "en", name: `🇷🇺 ${translate("russian")}` }
            // { id: "uz", name: `🇺🇿 ${translate("uzbek")}` }
        ]} />
    ]

    return (
        <List
            {...props}
            filters={Filter}
            exporter={false}
            bulkActionButtons={false}
        >
            <Datagrid
                rowClick={() => {
                    return "show"
                }}
            >
                <TextField source="id" sortable={false} />
                <TextField source="name" sortable={false} />
                <TextField source="doc_type" sortable={false} />
                <FunctionField
                    label="language"
                    render={(record: any) => getFlagByLang(record.language)}
                    sortable={false}
                />
                <PostListActionToolbar>
                    <ShowButton />
                    <DeleteButton undoable={false} />
                </PostListActionToolbar>
            </Datagrid>
        </List>
    )
}

export default PatternList
