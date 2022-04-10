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
    uzbek: "Uzbek",
    required: "Required field",
    simple: {
        action: {
            close: "Close",
            resetViews: "Reset views"
        },
        "create-post": "New post"
    },
    resources: {
        pattern: {
            name: "Pattern |||| Patterns",
            fields: {
                json_pattern: "Dynamic fields"
            }
        },
        reference: {
            name: "Reference |||| References"
        }
    },
    pattern: {
        // list: {
        //     search: "Search"
        // },
        form: {
            personal: "Personal Detail",
            course: "Course Detail",
        },
        show: {
            title: "Pattern \"%{title}\""
        },
        action: {
            save_and_add: "Save and Add",
            save_and_show: "Save and Show",
        }
    },
    // comment: {
    //     list: {
    //         about: "About"
    //     }
    // },
    // user: {
    //     list: {
    //         search: "Search"
    //     },
    //     form: {
    //         summary: "Summary",
    //         security: "Security"
    //     },
    //     edit: {
    //         title: "User \"%{title}\""
    //     },
    //     action: {
    //         save_and_add: "Save and Add",
    //         save_and_show: "Save and Show"
    //     }
    // }
}

export default enMessages

