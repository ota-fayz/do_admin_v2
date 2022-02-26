import { useEffect, useRef } from "react"

export const tryToSetDocumentTitle = (title: string) => {
    try {
        document.title = title
    } catch (e) {
        console.warn("Document is undefined")
    }
}

const useDocumentTitle = (title: string, revertOnUnmount: boolean = true) => {
    const isBrowser = typeof document !== "undefined"
    const prevPageTitleRef = useRef(isBrowser ? document.title : null)

    useEffect(() => {
        if (isBrowser) {
            prevPageTitleRef.current = document.title
        }
    }, [isBrowser])

    useEffect(() => {
        if (isBrowser) {
            tryToSetDocumentTitle(title)
        }

        return () => {
            if (isBrowser && revertOnUnmount && prevPageTitleRef.current !== null) {
                tryToSetDocumentTitle(prevPageTitleRef.current)
            }
        }
    }, [isBrowser, title, revertOnUnmount])
}

export default useDocumentTitle