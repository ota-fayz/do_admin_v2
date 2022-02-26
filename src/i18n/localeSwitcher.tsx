import Button from "@material-ui/core/Button"
import { useLocale, useSetLocale, useTranslate } from "react-admin"

const LocaleSwitcher = () => {
    const locale = useLocale()
    const setLocale = useSetLocale()
    const translate = useTranslate()

    return (
        <div>
            <div>{translate("language")}</div>
            <Button
                disabled={locale === "en"}
                onClick={() => setLocale("en")}
            >
                {translate("english")}
            </Button>
            <Button
                disabled={locale === "ru"}
                onClick={() => setLocale("ru")}
            >
                {translate("russian")}
            </Button>
        </div>
    )
}

export default LocaleSwitcher