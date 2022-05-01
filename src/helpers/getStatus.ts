export const getStatus = (status: number) => {
    switch (status) {
        case 0:
            return "awaiting"
        case 1:
            return "ready"
        case 2:
            return "canceled"
        case 3:
            return "deleted"
        default:
            return ""
    }
}
