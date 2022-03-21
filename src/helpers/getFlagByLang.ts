export const getFlagByLang = (lang: string): string => {
    switch (lang) {
        case "en":
            return "🇺🇸"
        case "ru":
            return "🇷🇺"
        case "uz":
            return "🇺🇿"
        default:
            return ""
    }
}