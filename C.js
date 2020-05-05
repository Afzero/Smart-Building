Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNDkxNmUwOC1hN2Y1LTQ0NGQtODVlZC01ZjA5OTA4YTlhZjQiLCJpZCI6MTUxODEsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjczNzU2MDB9.9Z7d7bgJmmIxDggXO1VNNHpMmg1s9nyHxwm42Un-xgQ';
var viewer = new Cesium.Viewer('cesiumContainer', {
    geocoder: false,
    homeButton: false,
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false,
    animation: false,
    // timeline: false
});
viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
viewer.imageryLayers.addImageryProvider(new Cesium.OpenStreetMapImageryProvider({
    url : 'https://a.tile.openstreetmap.org/'
}));
viewer.scene.globe.enableLighting = true;
var currentTime = Cesium.JulianDate.fromIso8601('20200622T120000+0200');
var endTime = Cesium.JulianDate.addDays(currentTime, 1, new Cesium.JulianDate());

viewer.clock.currentTime = currentTime;
viewer.timeline.zoomTo(currentTime, endTime);
// Create an initial camera view
var initialPosition = new Cesium.Cartesian3.fromDegrees(6.234951, 62.471599, 1000);
var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -85, -0);
var homeCameraView = {
    destination : initialPosition,
    orientation : {
        heading : initialOrientation.heading,
        pitch : initialOrientation.pitch,
        roll : initialOrientation.roll
    }
};
var NTNUPosition = new Cesium.Cartesian3.fromDegrees(6.234951, 62.471399, 300);
var NTNUOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -85, -0);
var NTNUView = {
    destination : NTNUPosition,
    orientation : {
        heading : NTNUOrientation.heading,
        pitch : NTNUOrientation.pitch,
        roll : NTNUOrientation.roll
    },
    duration : 0.5
};
// Set the initial view
viewer.scene.camera.setView(homeCameraView);



// var position = Cesium.Cartesian3.fromDegrees(6.234851, 62.471699); // For default Map
var position1 = Cesium.Cartesian3.fromDegrees(6.232660234266139, 62.472536283209294);
var position2 = Cesium.Cartesian3.fromDegrees(6.233456546000588, 62.47191203052372);
var position3 = Cesium.Cartesian3.fromDegrees(6.234752935156261, 62.47172251923145);
var position4 = Cesium.Cartesian3.fromDegrees(6.2364949374477705, 62.4720059513983);
var position5 = Cesium.Cartesian3.fromDegrees(6.233127998282732, 62.47040909568865);
var heading1 = Cesium.Math.toRadians(88.0);
var pitch1 = Cesium.Math.toRadians(0.0);
var roll1 = Cesium.Math.toRadians(0.0);
var orientation1 = Cesium.Transforms.headingPitchRollQuaternion(position1, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));
var orientation2 = Cesium.Transforms.headingPitchRollQuaternion(position2, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));
var orientation3 = Cesium.Transforms.headingPitchRollQuaternion(position3, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));
var orientation4 = Cesium.Transforms.headingPitchRollQuaternion(position4, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));
var orientation5 = Cesium.Transforms.headingPitchRollQuaternion(position5, new Cesium.HeadingPitchRoll(heading1, pitch1, roll1));

var entity1 = viewer.entities.add({
    name: 'Gnisten',
    position : position1,
    orientation : orientation1,
    // description: 'This an entity description with a clickable button in it.',
    model : {
        uri : 'Model/building1.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});
var entity2 = viewer.entities.add({
    name: 'Lanterna',
    position : position2,
    orientation : orientation2,
    model : {
        uri : 'Model/building2.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});
var entity3 = viewer.entities.add({
    name: 'Ankeret',
    position : position3,
    orientation : orientation3,
    model : {
        uri : 'Model/building3.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});
var entity4 = viewer.entities.add({
    name: 'Kompasset',
    position : position4,
    orientation : orientation4,
    model : {
        uri : 'Model/building4.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});
var entity5 = viewer.entities.add({
    name: 'Nautilus',
    position : position5,
    orientation : orientation5,
    model : {
        uri : 'Model/building5.glb',
        color : new Cesium.Color(1.0, 1.0, 1.0, 1),
        scale : 1,
    }
});
// var entity = [];
// function Createbuilding(position){
//     for (i = 0, i < length(position), i++){
//         entity[i] = 
//     }
// }
// viewer.trackedEntity = entity;
//

// entity1._model._color._value = new Cesium.Color(1.0, 0.8, 0.0, 1); // yellow
// entity2._model._color._value = new Cesium.Color(1.0, 0.7, 0.0, 1); // orange
// entity3._model._color._value = new Cesium.Color(1.0, 0.4, 0.0, 1);
// entity4._model._color._value = new Cesium.Color(0.0, 0.3, 1.0, 1); // blue
// entity5._model._color._value = new Cesium.Color(1.0, 0.1, 0.0, 1);


viewer.canvas.addEventListener('click', function(e){
    var mousePosition = new Cesium.Cartesian2(e.clientX, e.clientY);
 
    var ellipsoid = viewer.scene.globe.ellipsoid;
    var cartesian = viewer.camera.pickEllipsoid(mousePosition, ellipsoid);
    if (cartesian) {
        var cartographic = ellipsoid.cartesianToCartographic(cartesian);
        var longitudeString = Cesium.Math.toDegrees(cartographic.longitude)
        var latitudeString = Cesium.Math.toDegrees(cartographic.latitude)
 
        // console.dir(longitudeString);
        // entity1._model._color._value.alpha = 0.5;
    } else {
        alert('Globe was not picked');
    }
	
}, false);

//M
/////////
// var Map = new Mazemap.Map({
//     container: 'mazemap-container',
//     // center: {lng: 6.234951, lat: 62.471599},
//     // zoom: 16.5,
//     doubleClickZoom: false,
//     touchZoomRotate: false
// });

var Map;
var handler= new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
var buttonElement = document.getElementById('mazemapbutton');
handler.setInputAction(function (movement) {
    var picked = viewer.scene.pick(movement.position);
    var id = Cesium.defaultValue(picked.id, picked.primitive.id);
    if (id instanceof Cesium.Entity) {
        var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(id.position._value); 
        var long = Cesium.Math.toDegrees(carto.longitude) + 0.0008;
        var lati = Cesium.Math.toDegrees(carto.latitude) + 0.0003;
        console.dir(long);
        console.dir(lati);
        viewer.scene.camera.flyTo(NTNUView);
        entity1._model._color._value.alpha = 1;
        entity2._model._color._value.alpha = 1;
        entity3._model._color._value.alpha = 1;
        entity4._model._color._value.alpha = 1;
        entity5._model._color._value.alpha = 1;
        id._model._color._value.alpha = 0.4;
        // document.getElementById('buttoncontrol').style.display='block';
        Map = new Mazemap.Map({
            container: 'mazemap-container',
            center: {lng: long, lat: lati},
            zoom: 17.3,
            speed: 2.5,
            curve: 1,
            doubleClickZoom: false,
            touchZoomRotate: false
        });
        Map.on('load', function(){
            // Initialize a Highlighter for POIs
            // Storing the object on the map just makes it easy to access for other things
            Map.highlighter = new Mazemap.Highlighter( Map, {
                showOutline: true,
                showFill: true,
                outlineColor: Mazemap.Util.Colors.MazeColors.MazeBlue,
                fillColor: Mazemap.Util.Colors.MazeColors.MazeBlue
            } );
            // if (roomElement.checked == true){
            //     Map.on('click', onMapClick);
            // }
            
            buttonElement.style.display = 'block';
            heatmapElement.checked = false;
            roomElement.checked = false;
            Map.addSource('heatpoints', {
                "type": "geojson",
                "data": "Data/heatpoint.geojson"
            });
        
        });
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


// // handler.setInputAction(function (movement) {
// //     var picked = viewer.scene.pick(movement.position);
// //     var id = Cesium.defaultValue(picked.id, picked.primitive.id);
// //     if (id instanceof Cesium.Entity) {
// //         console.dir(id);
// //         viewer.scene.camera.flyTo(NTNUView);
// //         entity.model.color = new Cesium.Color(0.8, 0.5, 0.8, 0.8);
// //         document.getElementById('mazemap-container').style.display='block';
// //         Map.flyTo({
// //             center: {lng: 6.234951, lat: 62.471599},
// //             zoom: 16.5,
// //             speed: 2.5,
// //             curve: 1,
// //         });
// //     }
// // }, Cesium.ScreenSpaceEventType.LEFT_CLICK);



// // handler.setInputAction(function (movement) {
// //     Map.flyTo({
// //         center: {lng: 6.234951, lat: 62.471599},
// //         zoom: 16.5,
// //         speed: 2.5,
// //         curve: 1,
// //     });
// // }, Cesium.ScreenSpaceEventType.LEFT_CLICK);



// // entity.on('click', function(e){
// //     Map.flyTo({
// //         center: {lng: 6.234951, lat: 62.471599},
// //         zoom: 16.5,
// //         speed: 2.5,
// //         curve: 1,
// //     });
// // });


// // Map.on('load', function(){
// //     // Initialize a Highlighter for POIs
// //     // Storing the object on the map just makes it easy to access for other things
// //     Map.highlighter = new Mazemap.Highlighter( Map, {
// //         showOutline: true,
// //         showFill: true,
// //         outlineColor: Mazemap.Util.Colors.MazeColors.MazeBlue,
// //         fillColor: Mazemap.Util.Colors.MazeColors.MazeBlue
// //     } );
// //     Map.on('click', onMapClick);

// // });


// define a global
var mazeMarker;
var warningMarker;
var crowdMarker;

function onMapClick(e){
    // Clear existing, if any
    clearPoiMarker();


    var lngLat = e.lngLat;
    var zLevel = Map.zLevel;

    // Fetching via Data API
    Mazemap.Data.getPoiAt(lngLat, zLevel).then( poi => {
        console.dir(poi);
        // printPoiData(poi);
        // for 163 room
        if (poi.properties['title'] == '163'){ 
            console.dir("Not normal room");
            if(poi.geometry.type === "Polygon"){
                Map.highlighter.highlight(poi);
            }
            Map.flyTo({center: lngLat, zoom: 19, speed: 0.5});            
        }else{
            placePoiMarker(poi);
        }
        // document.getElementById('1400d0b3-2250-4230-a4d9-e31fae9f1c6d').style.display='block';

    }).catch( function(){ return false; } );
}

// function printPoiData(poi){
//     var poiStr = JSON.stringify(poi, null, 2); // spacing level = 2
//     document.getElementById('poi-data').innerHTML = poiStr;

//     console.log(poi); // Can also look in your console to see the object there
// }

function clearPoiMarker(poi){
    if(mazeMarker){
        mazeMarker.remove();
    }
    Map.highlighter.clear();
};

function placePoiMarker(poi){

    // Get a center point for the POI, because the data can return a polygon instead of just a point sometimes
    var lngLat = Mazemap.Util.getPoiLngLat(poi);

    mazeMarker = new Mazemap.MazeMarker({
        color: '#ff00cc',
        innerCircle: true,
        innerCircleColor: '#FFF',
        size: 34,
        innerCircleScale: 0.5,
        zLevel: poi.properties.zLevel
    })
    .setLngLat(lngLat)
    .addTo(Map);
    var popup = new Mazemap.Popup({closeOnClick: true, offset: [0, -27]})
                .setHTML(
                    '<div id="container_buttons">' +
                    '<p style="font-size: 15px;">The environment of this room is normal</p>' +
                    '<p>&nbsp&nbsp<button class="a_demo_one" onclick="rtdElementclicked_nodata()" target="_blank"><b style="font-size: 15px;">Current data</b></button>&nbsp&nbsp&nbsp'+
                    '<button class="a_demo_one" onclick="rtdElementclicked_nodata()" target="_blank"><b style="font-size: 15px;">Historical data</b></button></p>' +
                    '</div>'
                    ).setMaxWidth('none');

    mazeMarker.setPopup(popup);
    mazeMarker.on('click', () => {
        // Can also do extra click handling here...
        console.log('@ Default mazeMarker got clicked!');
        // document.getElementById('1400d0b3-2250-4230-a4d9-e31fae9f1c6d').style.display='block';
    });

    // If we have a polygon, use the default 'highlight' function to draw a marked outline around the POI.
    if(poi.geometry.type === "Polygon"){
        Map.highlighter.highlight(poi);
    }
    Map.flyTo({center: lngLat, zoom: 19, speed: 0.5});
}

var buildingStyle = document.getElementById('buildingStyle');
var indicatorElement = document.getElementById('indicator');
function setBuildingStyle(){
    var selectedStyle = buildingStyle.options[buildingStyle.selectedIndex].value;
    if (selectedStyle === 'none') {
        entity1._model._color._value = new Cesium.Color(1.0, 1.0, 1.0, 1); 
        entity2._model._color._value = new Cesium.Color(1.0, 1.0, 1.0, 1); 
        entity3._model._color._value = new Cesium.Color(1.0, 1.0, 1.0, 1);
        entity4._model._color._value = new Cesium.Color(1.0, 1.0, 1.0, 1); 
        entity5._model._color._value = new Cesium.Color(1.0, 1.0, 1.0, 1);
        entity1.description = '',
        entity2.description = '',
        entity3.description = '',
        entity4.description = '',
        entity5.description = '',
        indicatorElement.style.display = 'none';
    } else if (selectedStyle === 'energy') {
        entity1._model._color._value = new Cesium.Color(0.3, 0.8, 0.7, 1); // yellow
        entity2._model._color._value = new Cesium.Color(1.0, 0.7, 0.0, 1); // orange
        entity3._model._color._value = new Cesium.Color(1.0, 0.4, 0.0, 1);
        entity4._model._color._value = new Cesium.Color(0.0, 0.3, 1.0, 1); // blue
        entity5._model._color._value = new Cesium.Color(1.0, 0.1, 0.0, 1);
        entity1.description = '',
        entity2.description = '',
        entity3.description = '',
        entity4.description = '',
        entity5.description = '',
        indicatorElement.style.display = 'block';
        //show indicator
    } else if (selectedStyle === 'ieq') {
        entity1._model._color._value = new Cesium.Color(0.0, 1.0, 0.5, 1); 
        entity2._model._color._value = new Cesium.Color(1.0, 0.0, 0.0, 1); 
        entity3._model._color._value = new Cesium.Color(0.0, 1.0, 0.5, 1); 
        entity4._model._color._value = new Cesium.Color(0.0, 1.0, 0.5, 1); 
        entity5._model._color._value = new Cesium.Color(0.0, 1.0, 0.5, 1);       
        entity1.description = 
            'Indoor Environment Quality:' + 
            '<h3>Normal</h3>',
        entity2.description = 
            'Indoor Environment Quality:' + 
            '<h3>Not Normal</h3>'+
            '<img src="Pic/alert-icon-red.svg">',
        entity3.description = 
            'Indoor Environment Quality:' + 
            '<h3>Normal</h3>',
        entity4.description = 
            'Indoor Environment Quality:' + 
            '<h3>Normal</h3>',
        entity5.description = 
            'Indoor Environment Quality:' + 
            '<h3>Normal</h3>',
        // entity2.billboard = {
        //     image : 'Pic/alert-icon-red.svg',
        //     width : 64,
        //     height : 64,
        //     pixelOffset: new Cesium.Cartesian2(30, -30),
        // };
        indicatorElement.style.display = 'none';
    }
}

buildingStyle.addEventListener('change', setBuildingStyle);

var introElement = document.getElementById('introduction');
var rtdElement = document.getElementById('realtimedata');
var hdElement = document.getElementById('historydata');
var diElement = document.getElementById('dataindicator');
var crossElement = document.getElementById('x');
var heatmapElement = document.getElementById('phoneA');
var roomElement = document.getElementById('roomQ');


function addHeatmap(){
    if ( heatmapElement.checked == true){    
        Map.addLayer({
            "id": "heatpoints",
            "type": "heatmap",
            "source": "heatpoints",
            "maxzoom": 24,
            "paint": {
                // Increase the heatmap weight based on frequency and property magnitude
                "heatmap-weight": 1,
                // Increase the heatmap color weight weight by zoom level
                // heatmap-intensity is a multiplier on top of heatmap-weight
                "heatmap-intensity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    16, 0.2,
                    22, 1
                ],
                // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                // Begin color ramp at 0-stop with a 0-transparancy color
                // to create a blur-like effect.
                "heatmap-color": [
                    "interpolate",
                    ["linear"],
                    ["heatmap-density"],
                    0, "rgba(0,0,255,0)",
                    0.2, "#1FAFFC",
                    0.4, "#5BD76F",
                    0.6, "#FFE61E",
                    0.8, "#FF7B00",
                    1, "#FF3333"
                ],
                // Adjust the heatmap radius by zoom level
                "heatmap-radius": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    10, 5,
                    22, 30
                ],
                "heatmap-opacity": 0.8
            }
        });
        // Map.transform.pitch = 30;
        crowdMarker = new Mazemap.MazeMarker({
            imgUrl: 'Pic/alert-icon-red.svg',
            imgScale: 1,
            color: '#00A621',
        }).setLngLat({lng: 6.234176200784077, lat: 62.472141845460555}).addTo(Map);
        var popup = new Mazemap.Popup({closeOnClick: true, offset: [0, -27]})
                .setHTML(
                    '<div id="container_buttons">' +
                    '<b style="font-size: 20px;">This room is overcrowded!</b>'+
                    '</div>'
                    ).setMaxWidth('none');
        crowdMarker.setPopup(popup);
        // crowdMarker.on('click', () => {
        //     clearPoiMarker();
        //     console.log('@ Default mazeMarker got clicked!');
        //     Map.flyTo({center: crowdMarker.getLngLat(), zoom: 19, speed: 0.5});
        // });
     
    }else{
        Map.removeLayer('heatpoints');
        Map.transform.pitch = 0;
        crowdMarker.remove();
     
    }
}

heatmapElement.addEventListener('change', addHeatmap);


function roomQuality(){
    if ( roomElement.checked == true){
        Map.on('click', onMapClick);
        warningMarker = new Mazemap.MazeMarker({
            imgUrl: 'Pic/alert-icon-red.svg',
            imgScale: 1,
            color: '#00A621',
        }).setLngLat({lng: 6.234007228925265, lat: 62.47198854781797}).addTo(Map);
        var popup = new Mazemap.Popup({closeOnClick: true, offset: [0, -27]})
                .setHTML(
                    '<div id="container_buttons">' +
                    '<p style="font-size: 15px;">&nbsp&nbspThe <b>CO2 level</b> is too high!<br>&nbsp&nbspConsider the following actions: &nbsp &nbsp</p>' +
                    '<img src="Pic/Action1.jpg" height=30px width=30px>&nbsp&nbsp<b style="font-size: 15px;">Increase ventilation rate</b><br>'+
                    '<img src="Pic/Action2.jpg" height=30px width=30px>&nbsp&nbsp<b style="font-size: 15px;">Open windows and/or doors</b>' +
                    '<p>&nbsp&nbsp<button class="a_demo_one" onclick = "rtdElementclicked()" target="_blank"><b style="font-size: 15px;">Current data</b></button>&nbsp&nbsp&nbsp'+
                    '<button class="a_demo_one" onclick = "hdElementclicked()"><b style="font-size: 15px;">Historical data</b></button></p>' +
                    '</div>'                   
                    ).setMaxWidth('none');

        warningMarker.setPopup(popup);
        warningMarker.on('click', () => {
            clearPoiMarker();
            console.log('@ Default mazeMarker got clicked!');
	    Map.zLevel = 1;
            Map.flyTo({center: warningMarker.getLngLat(), zoom: 19, speed: 0.5});
        });
    }else{
        warningMarker.remove();
        Map.off('click', onMapClick);
        clearPoiMarker();
        hideindoordata()
    }
}
roomElement.addEventListener('change', roomQuality);

function rtdElementclicked(){
    rtdElement.style.display = 'block';
    //hdElement.style.display = 'none';
    diElement.style.display = 'block';
    crossElement.style.display = 'block';
    
}

function rtdElementclicked_nodata(){
    alert("No data for this room yet");
}

function hdElementclicked() {
    hdElement.style.display = 'block';
    //rtdElement.style.display = 'none';
    diElement.style.display = 'block';
    crossElement.style.display = 'block';
}

function hideindoordata(){
    rtdElement.style.display = 'none';
    hdElement.style.display = 'none';
    diElement.style.display = 'none';
    crossElement.style.display = 'none';
}
