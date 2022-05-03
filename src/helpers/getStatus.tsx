import Chip from "@material-ui/core/Chip"

export const getStatus = (status: number, translate: any) => {
    switch (status) {
        case 0:
            return <Chip color="secondary" label={translate("awaiting")} />
        case 1:
            return <Chip color="primary" label={translate("ready")} />
        case 2:
            return <Chip color="default" label={translate("canceled")} />
        case 3:
            return <Chip color="default" label={translate("deleted")} />
        default:
            return ""
    }
}
