/**
 * Created by developer on 20.03.16.
 */

    var statesData = [
        {
            id:"State-1",
            title:"Выдача со склада",
            number:33,
            details:{
                addressPlace:[
                    {
                        num1:3,
                        num2:15,
                        num3:45
                    }
                ],
                members:[
                    {
                        nameOperator:"А. И. Иванов",
                        nameMainOperator:"В. П. Петров"
                    }
                ],
                planTime:[
                    {
                        date:null,
                        time:null
                    }
                ],

                process:{
                    triggers:[
                        {
                            title:"Начало контроля ресурсов",
                            time:null,
                            type:"default"
                        },
                        {
                            title:"Обнаружение отсутствия ресурсов",
                            time:null,
                            type:"error"
                        },
                        {
                            title:"Получение разрешения на работу",
                            time:null,
                            type:"warning"
                        },
                        {
                            title:"Подтверждение полного обеспечения",
                            time:null,
                            type:"complete"
                        }
                    ],
                    result:{
                        title:"Время простоя из-за отсутствия ресурсов:",
                        time:null
                    }
                }

            }
        },
        {
            id:"State-2",
            title:"Транспортировка",
            number:33,
            details:{
                addressPlace:[
                    {
                        num1:23,
                        num2:4,
                        num3:44
                    }
                ],
                members:[
                    {
                        nameOperator:"B. И. Иванов",
                        nameMainOperator:"А. А. Сидоров"
                    }
                ],
                planTime:[
                    {
                        date:"12/03/2016",
                        time:"09:00"
                    }
                ],

                process:{
                    triggers:[
                        {
                            title:"Начало контроля ресурсов",
                            time:null,
                            type:"default"
                        },
                        {
                            title:"Обнаружение отсутствия ресурсов",
                            time:null,
                            type:"error"
                        },
                        {
                            title:"Получение разрешения на работу",
                            time:null,
                            type:"warning"
                        },
                        {
                            title:"Подтверждение полного обеспечения",
                            time:null,
                            type:"complete"
                        }
                    ],
                    result:{
                        time:null
                    }
                }

            }
        },
        {
            id:"State-3",
            title:"Контроль БТК",
            number:33,
            details:{
                addressPlace:[
                    {
                        num1:3,
                        num2:15,
                        num3:45
                    }
                ],
                members:[
                    {
                        nameOperator:"А. И. Иванов",
                        nameMainOperator:"В. П. Петров"
                    }
                ],
                planTime:[
                    {
                        date:null,
                        time:null
                    }
                ],

                process:{
                    triggers:[
                        {
                            title:"Начало контроля ресурсов",
                            time:null,
                            type:"default"
                        },
                        {
                            title:"Обнаружение отсутствия ресурсов",
                            time:null,
                            type:"error"
                        },
                        {
                            title:"Получение разрешения на работу",
                            time:null,
                            type:"warning"
                        },
                        {
                            title:"Подтверждение полного обеспечения",
                            time:null,
                            type:"complete"
                        }
                    ],
                    result:{
                        time:null
                    }
                }

            }
        }
    ];