// IIFE
(() => {
    // Source: https://github.com/bbecquet/Leaflet.RotatedMarker

    //create map in leaflet and tie it to the div called 'theMap'
    let map = L.map('theMap').setView([44.66083904265621, -63.577880859375], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var markers;

    const runFetch = () => {
        fetch('https://opensky-network.org/api/states/all')
        .then(response => response.json())
        .then(data => {
            var planeIcon = L.icon({
                iconUrl: 'plane2.png',
                iconSize:     [40, 40], // size of the icon
                iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
                popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
            });

            let newState = [];
            console.log(data);

            newState = data.states.filter( (state) => state[2] === "Canada")
                                    .map( (state) => {
                                        return{
                                            icao: state[0],
                                            callSign: state[1],
                                            baroAltitude: state[7],
                                            onGround: state[8],
                                            velocity: state[9],
                                            trueTrack: state[10],
                                            verticalRate: state[11],
                                            geoAltitude: state[13],
                                            longitude: state[5],
                                            latitude: state[6]
                                        }
                                    })

            let geojsonFeature = (state) => {
                return state.map((data)=>{
                    return {
                        "type": "FeatureCollection",
                        "features": [
                            {
                                "type": "Feature",
                                "properties": {
                                    "Call Sign": data.callSign,
                                    "Baro Altitude": data.baroAltitude,
                                    "On Ground": data.onGround,
                                    "Velocity": data.velocity,
                                    "True Track": data.trueTrack,
                                    "Vertical Rate": data.verticalRate,
                                    "Geo Altitude": data.geoAltitude,
                                    "ICAO": data.icao
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [data.longitude, data.latitude]
                                }
                            }
                        ]
                    }
                });
            };

            L.geoJSON(geojsonFeature(newState), {
                    pointToLayer: (geJsonPoint, latlng) => {
                        markers = new L.marker(latlng, {rotationAngle: geJsonPoint.properties["True Track"], icon:planeIcon} )
                                .addTo(map).bindPopup("Call Sign: " + geJsonPoint.properties["Call Sign"] + 
                                "<br>Baro Altitude: " + geJsonPoint.properties["Baro Altitude"] + 
                                "<br>On Ground: " + geJsonPoint.properties["On Ground"] + 
                                "<br>Velocity: " + geJsonPoint.properties["Velocity"] + 
                                "<br>True Track: " + geJsonPoint.properties["True Track"] +
                                "<br>Vertical Rate: " + geJsonPoint.properties["Vertical Rate"] +
                                "<br>Geo Altitude: " + geJsonPoint.properties["Geo Altitude"]);
                    }
                })

            
            // var myLayer = L.geoJSON().addTo(map);
            // myLayer.addData(geojsonFeature(newState));
            // myLayer
            
            // marker = new L.marker()
            // map.removeLayer(markers);

        }) //end fetch
    } // end runFetch

    runFetch();
    
    // setInterval(runFetch, 7000);
})() // end IIFE