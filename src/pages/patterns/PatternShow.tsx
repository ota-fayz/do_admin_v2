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
    FunctionField,
    useTranslate
} from "react-admin"
import { Grid } from "@material-ui/core/"
import { PatternTitle } from "./PatternTitle"
import { getFlagByLang } from "../../helpers/getFlagByLang"
import React from "react"

const PatternShow = (props: any) => {
    const controllerProps = useShowController(props)
    const locale = useLocale()
    const translate = useTranslate()

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
                            render={(record: any) =>
                                getFlagByLang(record.language)
                            }
                        />
                        <Grid container>
                            <Grid sm item>
                                <ArrayField source="static_fields">
                                    <Datagrid>
                                        <TextField
                                            label={translate("static_fields")}
                                            source={
                                                locale === "ru"
                                                    ? "label.ru"
                                                    : "label.en"
                                            }
                                        />
                                    </Datagrid>
                                </ArrayField>
                            </Grid>
                            <Grid sm item>
                                <ArrayField source="json_pattern">
                                    <Datagrid>
                                        <TextField
                                            label={translate("json_pattern")}
                                            source="label"
                                        />
                                        <TextField
                                            label={translate("type")}
                                            source="type"
                                        />
                                    </Datagrid>
                                </ArrayField>
                            </Grid>
                        </Grid>
                    </Tab>
                    {/*<Tab label="pattern.form.course">*/}
                    {/*    */}
                    {/*</Tab>*/}
                </TabbedShowLayout>
            </ShowView>
        </ShowContextProvider>
    )
}

export default PatternShow
