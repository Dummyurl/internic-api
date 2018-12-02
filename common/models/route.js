'use strict';

module.exports = function(Route) {
    
    Route.savefullroute = function(name, 
        description,
        distance,
        time,
        cost,
        cooperativeID,
        stops,
        cb) {

        var stop1 = Route.app.models.Stop;
        
        Route.create({
            "name": name, 
            "description": description,
            "distance": distance,
            "time":time,
            "cost" : cost, 
            "cooperativeID" : cooperativeID,
            "createAt" : Date.now(), 
            "stops" : stops}, function(err,route) {

            if(err != null){
                cb(null, err); // whatever you want to return
            }else if(stops != undefined && stops != null){

                for (let index = 0; index < stops.length; index++) {
                    
                    var stop = stops[index];
                    var pictureStop = stop1.app.models.PictureStop;
                    
                    stop1.create({
                        "name": stop.name,
                        "description" : stop.description,
                        "latitude":  stop.latitude,
                        "longitude": stop.longitude,
                        "createAt": Date.now(),
                        "routeID": route.id,
                        "pictureStop": stop.pictureStop
                    },function(err, stopResutl){
                        
                        if(err != null){
                            cb(null, err); // whatever you want to return
                        }else if(stop.pictureStop != undefined && stop.PictureStop != null){
                            
                            var arrayPic = stop.pictureStop;
                            for (let i = 0; i < arrayPic.length; i++) {
                                var picStop = arrayPic[i];
                                pictureStop.create({
                                    "urlImge": picStop.urlImge,
                                    "description": picStop.description,
                                    "name": picStop.name,
                                    "createAt": Date.now(),
                                    "stopID": stopResutl.id
                                  },function(err,response){
                                        if(err != null){
                                            console.log(err);
                                        }
                                  });
                            }
                        }
                    });
                }
            }
            cb(null, route); // whatever you want to return
        })
    }

    Route.remoteMethod(
        'savefullroute', 
        {
        accepts: [
            {arg: 'name', type: 'string'},
            {arg: 'description', type: 'string'},
            {arg: 'distance', type: 'number'},
            {arg: 'time', type: 'number'},
            {arg: 'cost', type: 'number'},
            {arg: 'cooperativeID', type: 'number'},
            {arg: 'stops', type: 'array'}
            ],
        returns: {arg: 'Route', type: 'object'}
        }
    );
};
