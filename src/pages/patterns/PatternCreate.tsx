import {
    Create,
    SaveButton,
    SimpleForm,
    TextInput,
    Toolbar,
    FileInput,
    FileField,
    useTranslate,
    SelectInput
} from "react-admin"
import React from "react"
import { useStyles } from "../../styles/useStyles"

const PostCreateToolbar = (props: any) => {
    const classes = useStyles()

    return (
        <Toolbar {...props}>
            <SaveButton
                label="pattern.action.save_and_show"
                redirect="show"
                submitOnEnter={true}
                className={classes.mR}
            />
            <SaveButton
                label="pattern.action.save_and_add"
                variant="text"
                redirect={false}
                submitOnEnter={false}
            />
        </Toolbar>
    )
}

const PatternCreate = ({ ...props }: any) => {
    const translate = useTranslate()

    const validations = (values: any) => {
        const errors = {} as any
        ;["name", "pattern_file", "language", "doc_type"].forEach((field) => {
            if (!values[field]) {
                errors[field] = translate("required")
            }
        })
        return errors
    }

    return (
        <Create {...props}>
            <SimpleForm toolbar={<PostCreateToolbar />} validate={validations}>
                <FileInput
                    source="pattern_file"
                    label={translate("word")}
                    accept=".doc,.docx"
                >
                    <FileField source="src" title="title" />
                </FileInput>
                <TextInput source="name" />
                <SelectInput
                    source="doc_type"
                    choices={[
                        { id: "reference", name: "Reference" },
                        { id: "application", name: "Application" },
                        { id: "id", name: "ID" }
                    ]}
                />
                <SelectInput
                    source="language"
                    choices={[
                        { id: "en", name: `🇺🇸 ${translate("english")}` },
                        { id: "ru", name: `🇷🇺 ${translate("russian")}` },
                        { id: "uz", name: `🇺🇿 ${translate("uzbek")}` }
                    ]}
                />
            </SimpleForm>
        </Create>
    )
}

export default PatternCreate
