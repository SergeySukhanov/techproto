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
        var ins = this;
        console.log("itemScheme page");
        //console.log(this.get("services"));
        $.ajax({
            url: "/states",
            type: "GET"
        }).then(function(d){
            //console.log(d);
            ins.set({"new": d});
            console.log(ins.get("new"));
        });
    }
});