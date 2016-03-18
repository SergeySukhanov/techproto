/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/18/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */


var resources = {
    states:[
        {
            id:"123344",
            name:"Токарная",
            number:"15",
            details:{
                addressPlace:[
                    {
                        num1:"3",
                        num2:"15",
                        num3:"45"
                    }
                ],
                members:[
                    {
                        nameOperator:"Ivanov",
                        nameMainOperator:"Petrov"
                    }
                ],
                planTime:[
                    {
                        date:"12/03/2016",
                        time:"12:30:23"
                    }
                ]
            }
        }
    ]
};

var services = {

};

var state = {
    id:"1234567",
    title:"State title",
    number:"State number(for example 23)",
    details:{
        addressPlace:[
            {
                num1:"123",
                num2:"12",
                num3:"4444"
            }
        ],
        members:[
            {
                nameOperator:"Ivanov",
                nameMainOperator:"Petrov"
            }
        ],
        planTime:[
            {
                date:"12/03/2016",
                time:"12:30:23"
            }
        ]
    }
};

var stateAndService = {

};

var service = {
    id:"1222132",
    title:"Title service",
    types:[
        {
            type:"Ready",
            time:null
        },
        {
            type:"Not ready",
            time:null
        },
        {
            type:"Bad ready",
            time:null
        },
        {
            type:"Default",
            time:null
        }
    ]

};