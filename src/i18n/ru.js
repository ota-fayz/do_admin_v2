import russianMessages from "ra-language-russian"

const ruMessages = {
    ...russianMessages,
    main: "Главная",
    switch: "Переключить язык",
    welcome: "Добро пожаловать в администрацию",
    instruction: "Инструкция как пользоваться",
    title: "Деканат - Панель администратора",
    language: "Язык",
    status: "Статус",
    english: "Английский",
    russian: "Русский",
    uzbek: "Узбекский",
    required: "Обязательное поле",
    download: "Скачать",
    images: "Фото",
    files: "Файлы",
    label: "Поле",
    value: "Значение",
    type: "Тип",
    static_fields: "Постоянные поля",
    json_pattern: "Пользовательские поля",
    all: "Все",
    awaiting: "Ожидание",
    ready: "Готово",
    canceled: "Отменено",
    deleted: "Удалено",
    word: "Word-Шаблон",
    name: "Название",
    file: "Файл",
    image: "Фото",
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
                id: "ID",
                name: "Название",
                doc_type: "Тип документа",
                language: "Язык",
                field_name: "Название поля",
                static_fields: "Постоянные поля",
                json_pattern: "Пользовательские поля",
                additional_data: "Дополнительная информация",
                label: "Название поля",
                type: "Тип файла"
            }
        },
        reference: {
            name: "Справка |||| Справки",
            fields: {
                id: "ID",
                pattern_name: "Название шаблона",
                date_created: "Дата открытия",
                date_closed: "Дата закрытия",
                status: "Статус",
                type: "Тип документа",
                doc_type: "Тип документа",
                identity_string: "ID студента",
                first_name: "Имя",
                last_name: "Фамилия",
                ref: {
                    pattern: {
                        name: "Название шаблона"
                    },
                    images: "Фото",
                    files: "Файлы"
                }
            }
        }
    },
    pattern: {
        // list: {
        //     search: "Search"
        // },
        form: {
            personal: "Общая информация",
            course: "Поля для заполнения"
        },
        show: {
            title: 'Шаблон "%{title}"'
        },
        action: {
            save_and_add: "Сохранить и Добавить",
            save_and_show: "Сохранить и Показать"
        }
    },
    reference: {
        // list: {
        //     search: "Search"
        // },
        form: {
            personal: "Персональные данные",
            course: "Детали документа"
        },
        show: {
            title: 'Справка "%{title}"'
        },
        action: {
            save_and_add: "Сохранить и Добавить",
            save_and_show: "Сохранить и Показать"
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

export default ruMessages
