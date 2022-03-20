import russianMessages from "ra-language-russian"

const ruMessages = {
    ...russianMessages,
    main: "Главная",
    switch: "Переключить язык",
    welcome: "Добро пожаловать в администрацию",
    title: "Деканат - Панель администратора",
    language: "Язык",
    english: "Английский",
    russian: "Русский",
    simple: {
        action: {
            close: "Закрыть",
            resetViews: "Reset views"
        },
        "create-post": "New post"
    },
    resources: {
        pattern: {
            name: "Шаблон |||| Шаблоны",
            fields: {
                id: "Идентификатор",
                name: "Название",
                doc_type: "Тип документа",
                language: "Язык"
            }
        },
        reference: {
            name: "Справка |||| Справки",
        }
    },
    post: {
        list: {
            search: "Поиск"
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

export default ruMessages

