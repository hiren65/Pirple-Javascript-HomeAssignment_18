//alert();
let co_x;let co_y;

let apply = document.getElementById("Apply");
apply.addEventListener("click",findLocation);

function findLocation() {
    co_x = document.getElementById("num1").value;

    co_y = document.getElementById("num2").value;
    console.log("x: "+co_x +" y: "+co_y);
    geolocationShow();
}
let xx = document.getElementById("ans");
function geolocationShow(longitude,latitude) {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    } else{

        xx.innerText = "Geolocation is not supported by browser";
    }
}
function showPosition(position) {
    xx.innerHTML = "<span>Latitude:</span> " +"<span class='sp3'> " +  position.coords.latitude +"</span>" +
        "<br><span>Longitude:</span>  " + "<span class='sp3'> " + position.coords.longitude +"</span>";
}

/////////////////////////////
/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToBerlin(map){
    co_x = document.getElementById("num1").value;

    co_y = document.getElementById("num2").value;
    map.setCenter({lat:co_x, lng:co_y});
    map.setZoom(14);
}

let findMap = document.getElementById("findMap");
findMap.addEventListener("click",locator);
function locator() {
    moveMapToBerlin(map);
}




/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
    /*app_id: 'devportal-demo-20180625',
    app_code: '9v2BkviRwi9Ot26kp2IysQ',*/
    app_id:'EtfcbKbrmABEk3cJdAhF',
    app_code: '9B6rAJfmuf-rnuh3bEEs_Q',
    useHTTPS: true
});
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
});

//Step 2: initialize a map  - not specificing a location will give a whole world view.
var map = new H.Map(document.getElementById('map'),
    defaultLayers.normal.map, {pixelRatio: pixelRatio});

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);
/*// Now use the map as required...
moveMapToBerlin(map);*/
