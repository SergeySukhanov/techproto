/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/19/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var StateModel = Backbone.Model.extend({
    defaults:{
        id:"State-1",
        title:"Название этапа",
        number:null,
        details:{
            addressPlace:[
                {
                    num1:null,
                    num2:null,
                    num3:null
                }
            ],
            members:[
                {
                    nameOperator:"ФИО оператора",
                    nameMainOperator:"ФИО оператора"
                }
            ],
            planTime:[
                {
                    date:new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear(),
                    time:new Date().getHours() + "/" + new Date().getMinutes() + ":" + new Date().getSeconds()
                }
            ],

            process:{
                triggers:[
                    {
                        title:"Start",
                        time:null
                    },
                    {
                        title:"Start",
                        time:null
                    },
                    {
                        title:"Start",
                        time:null
                    },
                    {
                        title:"Start",
                        time:null
                    }
                ],
                result:{
                    time:null
                }
            }

        }
    }
});