import {
    ArrayField,
    Datagrid,
    ShowContextProvider,
    ShowView,
    Tab,
    TabbedShowLayout,
    TextField,
    useShowController,
    useLocale,
    FunctionField
} from "react-admin"
import { PatternTitle } from "./PatternTitle"
import { getFlagByLang } from "../../helpers/getFlagByLang"
import React from "react"

const PatternShow = (props: any) => {
    const controllerProps = useShowController(props)
    const locale = useLocale()

    return (
        <ShowContextProvider value={controllerProps}>
            <ShowView title={<PatternTitle />}>
                <TabbedShowLayout>
                    <Tab label="pattern.form.personal">
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="doc_type" />
                        <FunctionField
                            label="language"
                            render={(record: any) => getFlagByLang(record.language)}
                        />
                        <ArrayField source="static_fields">
                            <Datagrid>
                                <TextField
                                    label=""
                                    source={locale === "ru" ? "label.ru" : "label.en"}
                                />
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                    <Tab label="pattern.form.course">
                        <ArrayField source="json_pattern">
                            <Datagrid>
                                <TextField
                                    label=""
                                    source="label"
                                />
                                <TextField
                                    label=""
                                    source="type"
                                />
                            </Datagrid>
                        </ArrayField>
                    </Tab>
                </TabbedShowLayout>
            </ShowView>
        </ShowContextProvider>
    )
}

export default PatternShow
