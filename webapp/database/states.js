/**
 * Created by developer on 20.03.16.
 */

var statesData = [
    {
        id: "State-1",
        title: "Выдача со склада",
        number: 5,
        type: "operation",
        status: "delay",
        details: {
            addressPlace: [
                {
                    num1: 2,
                    num2: 5,
                    num3: 23
                }
            ],
            members: [
                {
                    nameOperator: "М.А. Кудрин",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-2",
        title: "Транспортировка",
        number: 15,
        type: "transportation",
        status: "delay",
        details: {
            addressPlace: [
                {
                    num1: 2,
                    num2: 5,
                    num3: "23-32"
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Сидорова",
                    nameMainOperator: "А. А. Сидоров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-3",
        title: "Контроль БТК",
        status: "losses",
        number: 20,
        type: "operation",
        details: {
            addressPlace: [
                {
                    num1: 2,
                    num2: 5,
                    num3: 32
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Петров",
                    nameMainOperator: "В. П. Петрова"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-4",
        title: "Транспортровка",
        number: 33,
        type: "transportation",
        status: "losses",
        details: {
            addressPlace: [
                {
                    num1: 2,
                    num2: 4,
                    num3: "32-17"
                }
            ],
            members: [
                {
                    nameOperator: "В. Р. Соколова",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-5",
        title: "Заготовительная",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-6",
        title: "Транспортировка",
        number: 33,
        type: "transportation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-7",
        title: "Автоматная",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-8",
        title: "Транспортировка",
        number: 33,
        type: "transportation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-9",
        title: "Контроль БТК",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-10",
        title: "Контроль БТК",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-11",
        title: "Траспортировка",
        number: 33,
        type: "transportation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-12",
        title: "Токарно-револьверная",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-13",
        title: "Токарно-револьверная",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-14",
        title: "Транспортировка",
        number: 33,
        type: "transportation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-15",
        title: "Контроль БТК",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-16",
        title: "Траспортировка",
        number: 33,
        type: "transportation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-17",
        title: "Токарно-револьверная",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-18",
        title: "Токарно-револьверная",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-19",
        title: "Токарно-револьверная",
        number: 33,
        type: "operation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    },
    {
        id: "State-20",
        title: "Траспортировка",
        number: 33,
        type: "transportation",
        status: "plan",
        details: {
            addressPlace: [
                {
                    num1: 3,
                    num2: 15,
                    num3: 45
                }
            ],
            members: [
                {
                    nameOperator: "А. И. Иванов",
                    nameMainOperator: "В. П. Петров"
                }
            ],
            planTime: [
                {
                    start:{
                        date: null,
                        time: null
                    },
                    finish:{
                        date: null,
                        time: null
                    },
                    getResources:{
                        date: null,
                        time: null
                    }
                }
            ],
            planDo:[
                {

                }
            ],

            planCount:[
                {
                    count:5
                }
            ],

            process: {
                triggers: [
                    {
                        title: "Начало контроля ресурсов",
                        time: null,
                        type: "default"
                    },
                    {
                        title: "Обнаружение отсутствия ресурсов",
                        time: null,
                        type: "error"
                    },
                    {
                        title: "Получение разрешения на работу",
                        time: null,
                        type: "warning"
                    },
                    {
                        title: "Подтверждение полного обеспечения",
                        time: null,
                        type: "complete"
                    }
                ],
                result: {
                    title: "Время простоя из-за отсутствия ресурсов:",
                    time: null
                }
            }

        }
    }
];