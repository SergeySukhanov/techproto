/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/19/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */


var ItemScheme = Ractive.extend({
    el:"#wrapper",
    adaptors:["Backbone"],
    magic:true,
    data: {

    },
    complete: function(){
        console.log("itemScheme page");
    }
});