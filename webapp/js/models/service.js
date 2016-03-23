/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/19/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var ServiceModel = Backbone.Model.extend({
    defaults:{
        id:"Service",
        title:"Название сервиса",
        status: "plan",
        types:[
            {
                type:"Готов",
                time:null
            },
            {
                type:"Не готов",
                time:null
            },
            {
                type:"Плохо готов",
                time:null
            },
            {
                type:"Не нужен",
                time:null
            }
        ]
    }
});