/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/19/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */


var Router = Backbone.Router.extend({
    routes:{
        "":"menu",
        "service":"service",
        "services":"services",
        "routeList":"routeList",
        "routeItem":"routeItem",
        "routeScheme":"routeScheme",
        "itemScheme":"itemScheme",
        "currentItem/:id": "currentItem"
    },

    menu:function(){
        tools.loadTemplate("menu", function(tmpl){
            new Menu({
                template:tmpl,
                data:{
                    config:Config
                }
            });
        });
    },

    service:function(){
        tools.loadTemplate("service", function(tmpl){
            new Menu({
                template:tmpl,
                data:{
                    config:Config,
                    states:new StateModel(),
                    service: new ServiceModel()
                }
            });
        });
    },

    services:function(){
        tools.loadTemplate("services", function(tmpl){
            new Services({
                template:tmpl,
                data:{
                    config:Config,
                    states: new StatesCollection(statesData),
                    services: new ServicesCollection(servicesData),
                    currentDetails:new StateModel(statesData[0].details)
                }
            });
        });
    },

    routeList:function(){

    },

    routeItem:function(){

    },

    routeScheme:function(){

    },

    itemScheme:function() {
        tools.loadTemplate("itemScheme", function (tmpl) {
            new ItemScheme({
                template: tmpl,
                data: {
                    config: Config,
                    services: new ServicesCollection(servicesData),
                    states: new StatesCollection(statesData)
                }
            });
        });
    },
    currentItem: function(id){
        console.log(id);
        tools.loadTemplate("currentItem", function(tmpl) {
           new CurrentItem({
               template: tmpl,
               data: {
                   config: Config,
                   state: new StateModel(statesData[id]),
                   services: new ServicesCollection(servicesData)
               }
           });
        });
    },

    initialize:function(){
        console.log("router start");
    }
});