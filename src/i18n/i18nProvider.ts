import polyglotI18nProvider from "ra-i18n-polyglot"
import { ru, en } from "./index"
import { resolveBrowserLocale } from "react-admin"

const messages: any = {
    en,
    ru
}

const i18nProvider = polyglotI18nProvider(
    locale => messages[locale] ? messages[locale] : messages.en,
    resolveBrowserLocale()
)

export default i18nProvider