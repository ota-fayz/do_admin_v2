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
    uzbek: "Узбекский",
    required: "Обязательное поле",
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
                language: "Язык",
                field_name: "Название поля",
                static_fields: "Статические поля",
                json_pattern: "Динамические поля"
            }
        },
        reference: {
            name: "Справка |||| Справки",
        }
    },
    pattern: {
        // list: {
        //     search: "Search"
        // },
        form: {
            personal: "Персональные данные",
            course: "Детали курса",
        },
        show: {
            title: "Шаблон \"%{title}\""
        },
        action: {
            save_and_add: "Сохранить и Добавить",
            save_and_show: "Сохранить и Показать",
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

export default ruMessages

