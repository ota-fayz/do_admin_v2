import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Title, useTranslate } from "react-admin"

export default function Dashboard() {
    const translate = useTranslate()

    return (
        <Card>
            <Title title={translate("main")} />
            <CardContent>
                <h1>{translate("welcome")}</h1>
            </CardContent>
        </Card>
    )
}
