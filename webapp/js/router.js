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
        "route":"route",
        "routeScheme":"routeScheme",
        "itemScheme":"itemScheme"
    },

    menu:function(){
        tools.loadTemplate("menu", function(tmpl){
            new Menu({
                el:tmpl,
                data:{
                    config:config
                }
            });
        });
    },

    service:function(){
        tools.loadTemplate("service", function(tmpl){
            new Menu({
                el:tmpl,
                data:{
                    config:config,
                    service: new ServiceModel()
                }
            });
        });
    },

    services:function(){
        tools.loadTemplate("service", function(tmpl){
            new Menu({
                el:tmpl,
                data:{
                    config:config,
                    service: new ServicesCollection()
                }
            });
        });
    },

    route:function(){

    },

    routeScheme:function(){

    },

    itemScheme:function(){

    },

    initialize:function(){
        console.log("router start");
    }
});