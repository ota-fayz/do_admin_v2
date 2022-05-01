import englishMessages from "ra-language-english"

const enMessages = {
    ...englishMessages,
    main: "Dashboard",
    switch: "Switch Language",
    welcome: "Welcome to the administration",
    title: "Dean's Office - Admin Panel",
    language: "Language",
    status: "Status",
    english: "English",
    russian: "Russian",
    uzbek: "Uzbek",
    required: "Required field",
    download: "Download",
    images: "Images",
    files: "Files",
    label: "Label",
    value: "Value",
    all: "All",
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
            name: "Reference |||| References",
            fields: {
                id: "ID",
                status: "Status",
                identity_string: "Student ID",
                doc_type: "Type",
                // doc_type: "Тип документа",
                // language: "Язык",
                // field_name: "Название поля",
                // static_fields: "Статические поля",
                // json_pattern: "Динамические поля"
                ref: {
                    pattern: {
                        name: "Pattern name"
                    },
                    images: "Images",
                    files: "Files"
                }
            }
        }
    },
    pattern: {
        // list: {
        //     search: "Search"
        // },
        form: {
            personal: "Personal Detail",
            course: "Course Detail"
        },
        show: {
            title: 'Pattern "%{title}"'
        },
        action: {
            save_and_add: "Save and Add",
            save_and_show: "Save and Show"
        }
    },
    reference: {
        // list: {
        //     search: "Search"
        // },
        form: {
            personal: "Personal Detail",
            course: "Course Detail"
        },
        show: {
            title: 'Reference "%{title}"'
        },
        action: {
            save_and_add: "Save and Add",
            save_and_show: "Save and Show"
        }
    }
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
