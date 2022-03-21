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
    SelectInput,
    DateField
} from "react-admin"

const referenceFilter = [
    <SearchInput source="q" alwaysOn />,
    <SelectInput allowEmpty={false} source="language" choices={[
        { id: "ru", name: "🇺🇸" },
        { id: "en", name: "🇷🇺" },
        { id: "uz", name: "🇺🇿" }
    ]} />
]

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

const ReferenceList = (props: any) => {
    return (
        <List
            {...props}
            filters={referenceFilter}
            exporter={false}
            bulkActionButtons={false}
        >
            <Datagrid
                // rowClick={rowClick}
            >
                <TextField source="ref_id" />
                <TextField source="pattern_name" />
                <DateField
                    source="date_created"
                    // cellClassName={classes.publishedAt}
                />
                <TextField source="status" />
                <TextField source="type" />
                <DateField
                    source="date_closed"
                    // cellClassName={classes.publishedAt}
                />
                <PostListActionToolbar>
                    <ShowButton />
                    <EditButton />
                    <DeleteButton />
                </PostListActionToolbar>
            </Datagrid>
        </List>
    )
}

export default ReferenceList
