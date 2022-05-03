import { forwardRef, memo } from "react"
import {
    Layout,
    AppBar,
    UserMenu,
    useLocale,
    useSetLocale,
    useTranslate
} from "react-admin"
import { MenuItem, ListItemIcon, MenuItemProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Language from "@material-ui/icons/Language"

const useStyles = makeStyles((theme) => ({
    menuItem: {
        color: theme.palette.text.secondary
    },
    icon: { minWidth: theme.spacing(5) }
}))

const SwitchLanguage = forwardRef((props: MenuItemProps) => {
    const locale = useLocale()
    const setLocale = useSetLocale()
    const classes = useStyles()
    const translate = useTranslate()

    return (
        <MenuItem
            className={classes.menuItem}
            onClick={(e) => {
                setLocale(locale === "en" ? "ru" : "en").then()
                if (props.onClick) props.onClick(e)
            }}
        >
            <ListItemIcon className={classes.icon}>
                <Language />
            </ListItemIcon>
            {translate("switch")}
        </MenuItem>
    )
})

const MyUserMenu = (props: any) => (
    <UserMenu {...props}>
        <SwitchLanguage />
    </UserMenu>
)

const MyAppBar = memo((props) => (
    <AppBar {...props} userMenu={<MyUserMenu />} />
))

const CustomLayout = (props: any) => <Layout {...props} appBar={MyAppBar} />

export default CustomLayout
