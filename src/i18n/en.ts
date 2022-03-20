import englishMessages from "ra-language-english"

const enMessages = {
    ...englishMessages,
    main: "Dashboard",
    switch: "Switch Language",
    welcome: "Welcome to the administration",
    title: "Dean's Office - Admin Panel",
    language: "Language",
    english: "English",
    russian: "Russian",
    simple: {
        action: {
            close: "Close",
            resetViews: "Reset views"
        },
        "create-post": "New post"
    },
    resources: {
        pattern: {
            name: "Pattern |||| Patterns"
        },
        reference: {
            name: "Reference |||| References"
        }
    },
    post: {
        list: {
            search: "Search"
        },
        form: {
            summary: "Summary",
            body: "Body",
            miscellaneous: "Miscellaneous",
            comments: "Comments"
        },
        edit: {
            title: "Post \"%{title}\""
        },
        action: {
            save_and_edit: "Save and Edit",
            save_and_add: "Save and Add",
            save_and_show: "Save and Show",
            save_with_average_note: "Save with Note"
        }
    },
    comment: {
        list: {
            about: "About"
        }
    },
    user: {
        list: {
            search: "Search"
        },
        form: {
            summary: "Summary",
            security: "Security"
        },
        edit: {
            title: "User \"%{title}\""
        },
        action: {
            save_and_add: "Save and Add",
            save_and_show: "Save and Show"
        }
    }
}

export default enMessages

