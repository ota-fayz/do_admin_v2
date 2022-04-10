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

const PostCreateToolbar = (props: any) => (
    <Toolbar {...props}>
        <SaveButton
            label="pattern.action.save_and_show"
            redirect="show"
            submitOnEnter={true}
        />
        <SaveButton
            label="pattern.action.save_and_add"
            variant="text"
            redirect={false}
            submitOnEnter={false}
        />
    </Toolbar>
)

const PatternCreate = ({ permissions, ...props }: any) => {
    const translate = useTranslate()

    const validations = (values: any) => {
        const errors = {} as any;
        ["name", "pattern_file", "language"].forEach(field => {
            if (!values[field]) {
                errors[field] = translate("required")
            }
        })
        return errors
    }

    return (
        <Create {...props}>
            <SimpleForm
                toolbar={<PostCreateToolbar />}
                validate={validations}
            >
                <FileInput
                    source="pattern_file"
                    label="Word-Template"
                    accept=".doc,.docx"
                >
                    <FileField source="src" title="title" />
                </FileInput>
                <SelectInput
                    source="language"
                    choices={[
                        { id: "en", name: `🇺🇸 ${translate("english")}` },
                        { id: "ru", name: `🇷🇺 ${translate("russian")}` }
                        // { id: "uz", name: `🇺🇿 ${translate("uzbek")}` }
                    ]}
                />
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
}

export default PatternCreate
