import React from "react"
import { Children, cloneElement } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
    Datagrid,
    EditButton,
    DeleteButton,
    List,
    SearchInput,
    ShowButton,
    TextField,
    TextInput,
} from "react-admin"

const patternFilter = [
    <SearchInput source="q" alwaysOn />,
    <TextInput source="language" defaultValue="Make me select" />,
]

const usePostListActionToolbarStyles = makeStyles({
    toolbar: {
        display: "flex",
        justifyContent: "space-around",
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
            filters={patternFilter}
            exporter={false}
        >
            <Datagrid
                // rowClick={rowClick}
            >
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="doc_type" />
                <TextField source="language" />
                <PostListActionToolbar>
                    <ShowButton />
                    <EditButton />
                    <DeleteButton />
                </PostListActionToolbar>
            </Datagrid>
        </List>
    )
}

export default PatternList
