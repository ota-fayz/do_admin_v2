import * as React from "react"
import { Link } from "@material-ui/core"
import { useRecordContext } from "react-admin"
import _ from "lodash"
import GetAppIcon from "@material-ui/icons/GetApp"

interface IUrlField {
    source: string
    label: string
}

const CustomUrlField = (props: IUrlField) => {
    const { source } = props
    const record = useRecordContext(props)
    const value = _.get(record, source)

    if (!value) return null

    // return (
    //     <Typography component="span" variant="body2">
    //         -
    //     </Typography>
    // )

    return (
        <Link href={value} target="_blank">
            <GetAppIcon />
        </Link>
    )
}

CustomUrlField.defaultProps = {
    addLabel: true
}

export default CustomUrlField
