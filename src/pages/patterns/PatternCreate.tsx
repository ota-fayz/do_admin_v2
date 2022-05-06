import {
    Create,
    SaveButton,
    SimpleForm,
    TextInput,
    Toolbar,
    FileInput,
    FileField,
    useTranslate,
    SelectInput,
    ArrayInput,
    SimpleFormIterator
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
        const adData = "additional_data"
        const obj = {
            label: translate("required"),
            type: translate("required")
        }
        const errors = {} as any
        errors[adData] = []
        ;["name", "pattern_file", "language", "doc_type"].forEach((field) => {
            if (!values[field]) {
                errors[field] = translate("required")
            }
        })
        if (Array.isArray(values[adData])) {
            values[adData].map((el: any) => {
                if (!el) {
                    errors[adData].push(obj)
                }
            })
        }
        return errors
    }

    return (
        <Create {...props}>
            <SimpleForm toolbar={<PostCreateToolbar />} validate={validations}>
                <FileInput
                    source="pattern_file"
                    label={translate("word")}
                    accept=".doc,.docx"
                    isRequired
                >
                    <FileField source="src" title="title" />
                </FileInput>
                <TextInput isRequired source="name" />
                <SelectInput
                    source="doc_type"
                    isRequired
                    choices={[
                        { id: "reference", name: "Reference" },
                        { id: "application", name: "Application" },
                        { id: "id", name: "ID" }
                    ]}
                />
                <SelectInput
                    source="language"
                    isRequired
                    choices={[
                        { id: "en", name: `🇺🇸 ${translate("english")}` },
                        { id: "ru", name: `🇷🇺 ${translate("russian")}` },
                        { id: "uz", name: `🇺🇿 ${translate("uzbek")}` }
                    ]}
                />
                <ArrayInput source="additional_data">
                    <SimpleFormIterator disableReordering>
                        <TextInput isRequired source="label" />
                        <SelectInput
                            isRequired
                            source="type"
                            choices={[
                                {
                                    id: "file",
                                    name: translate("file")
                                },
                                {
                                    id: "image",
                                    name: translate("image")
                                }
                            ]}
                        />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    )
}

export default PatternCreate
