import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Title, useTranslate } from "react-admin"
import useDocumentTitle from "hooks/useDocumentTitle"

export default function Dashboard() {
    const translate = useTranslate()

    useDocumentTitle(translate("title"))

    return (
        <Card>
            <Title title={translate("main")} />
            <CardContent>{translate("welcome")}</CardContent>
        </Card>
    )
}
