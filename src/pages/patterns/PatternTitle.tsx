import { useTranslate, TitleProps } from "react-admin"

export const PatternTitle = ({ record }: TitleProps) => {
    const translate = useTranslate()

    return (
        <span>
            {record
                ? translate("pattern.show.title", { title: record.name })
                : ""}
        </span>
    )
}
