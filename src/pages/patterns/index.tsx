import BookIcon from "@material-ui/icons/Book"
import PatternList from "./PatternList"
import PatternShow from "./PatternShow"
import PatternCreate from "./PatternCreate"

const patterns = {
    list: PatternList,
    create: PatternCreate,
    // edit: PatternEdit,
    show: PatternShow,
    icon: BookIcon
}

export default patterns