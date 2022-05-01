import React from "react"
import {
    ArrayField,
    Datagrid,
    DateField,
    FunctionField,
    ShowContextProvider,
    ShowView,
    Tab,
    TabbedShowLayout,
    TextField,
    useShowController,
    useTranslate,
    EditButton,
    TopToolbar
} from "react-admin"
import { Grid } from "@material-ui/core/"
import { getFlagByLang } from "../../helpers/getFlagByLang"
import { ReferenceTitle } from "./ReferenceTitle"
import { getStatus } from "../../helpers/getStatus"
import CustomUrlField from "../../components/CustomUrlField"

const referenceRowStyle = () => ({
    height: "42px"
})

const ReferenceShowActions = ({ basePath, data }: any) => {
    return (
        <TopToolbar>
            <EditButton
                disabled={data?.status === 3}
                basePath={basePath}
                record={data}
            />
        </TopToolbar>
    )
}

const ReferenceShow = (props: any) => {
    const controllerProps = useShowController(props)
    const translate = useTranslate()

    return (
        <ShowContextProvider value={controllerProps}>
            <ShowView
                actions={<ReferenceShowActions />}
                title={<ReferenceTitle />}
            >
                <TabbedShowLayout>
                    <Tab label="reference.form.personal">
                        <TextField source="id" />
                        <TextField source="type" />
                        <TextField source="identity_string" />
                        <TextField source="first_name" />
                        <TextField source="last_name" />
                        <FunctionField
                            label="status"
                            render={(record: any) => getStatus(record.status)}
                        />
                        <DateField showTime source="date_created" />
                        <DateField
                            emptyText="-"
                            showTime
                            source="date_closed"
                        />
                    </Tab>
                    {controllerProps.record?.status !== 3 && (
                        <Tab label="reference.form.course">
                            <TextField source="ref.pattern.name" />
                            <FunctionField
                                label="language"
                                render={(record: any) =>
                                    getFlagByLang(record.ref.pattern.language)
                                }
                            />
                            <CustomUrlField
                                label={translate("download")}
                                source="ref.ref"
                            />
                            <Grid container>
                                <Grid sm item>
                                    <ArrayField source="ref.pattern.json_pattern">
                                        <Datagrid rowStyle={referenceRowStyle}>
                                            <TextField
                                                label={translate("label")}
                                                source="label"
                                            />
                                        </Datagrid>
                                    </ArrayField>
                                </Grid>
                                <Grid sm item>
                                    <ArrayField source="ref.reference_json">
                                        <Datagrid rowStyle={referenceRowStyle}>
                                            <TextField
                                                label={translate("value")}
                                                source="value"
                                            />
                                        </Datagrid>
                                    </ArrayField>
                                </Grid>
                                <Grid item>
                                    <ArrayField source="ref.images">
                                        <Datagrid>
                                            <CustomUrlField
                                                label={translate("images")}
                                                source="value"
                                            />
                                        </Datagrid>
                                    </ArrayField>
                                </Grid>
                                <Grid item>
                                    <ArrayField source="ref.files">
                                        <Datagrid>
                                            <CustomUrlField
                                                label={translate("files")}
                                                source="value"
                                            />
                                        </Datagrid>
                                    </ArrayField>
                                </Grid>
                            </Grid>
                        </Tab>
                    )}
                </TabbedShowLayout>
            </ShowView>
        </ShowContextProvider>
    )
}

export default ReferenceShow
