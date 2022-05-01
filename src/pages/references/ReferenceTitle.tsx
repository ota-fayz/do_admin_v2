import { useTranslate, TitleProps } from "react-admin"

export const ReferenceTitle = ({ record }: TitleProps) => {
    const translate = useTranslate()

    return (
        <span>
            {record
                ? translate("reference.show.title", { title: record.id })
                : ""}
        </span>
    )
}
