export const cutOffString = (string: string): string => {
    let sliced = string.slice(0, 18)
    if (sliced.length < string.length) {
        sliced += "..."
    }
    return sliced
}
