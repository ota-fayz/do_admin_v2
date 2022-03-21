import React from "react"
import { Children, cloneElement } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
    Datagrid,
    EditButton,
    DeleteButton,
    List,
    ShowButton,
    TextField,
    FunctionField
} from "react-admin"
import { Filter } from "../components/filter"
import { getFlagByLang } from "../helpers/getFlagByLang"

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

// const rowClick = (id: any, basePath: any, record: any) => {
//     if (record.commentable) {
//         return "edit"
//     }
//
//     return "show"
// }



const PatternList = (props: any) => {
    return (
        <List
            {...props}
            filters={Filter}
            exporter={false}
            bulkActionButtons={false}
        >
            <Datagrid
                // rowClick={rowClick}
            >
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="doc_type" />
                <FunctionField
                    label="language"
                    render={(record: any) => getFlagByLang(record.language)}
                />
                <PostListActionToolbar>
                    <ShowButton />
                    <EditButton />
                    <DeleteButton undoable={false} />
                </PostListActionToolbar>
            </Datagrid>
        </List>
    )
}

export default PatternList
