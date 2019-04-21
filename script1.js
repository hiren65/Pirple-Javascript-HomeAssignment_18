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
    document.getElementById("num1").value = position.coords.latitude;
    document.getElementById("num2").value = position.coords.longitude;

}

let findMap = document.getElementById("findMap");
findMap.addEventListener("click",initMap);

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
function initMap() {
    let co_x1 = document.getElementById("num1").value;

   let  co_y1 = document.getElementById("num2").value;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:parseFloat(co_x1) , lng:parseFloat(co_y1) },
        zoom: 14
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: parseFloat(co_x1),
                lng: parseFloat(co_y1)
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

///////////////////////find location//////////////////
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map1;
var service;
var infowindow;
let findLocation1 = document.getElementById("findMapLocation");
findLocation1.addEventListener("click",initMap1);
function initMap1() {
    let co_x1 = document.getElementById("num1").value;

    let  co_y1 = document.getElementById("num2").value;

    let findPlace = document.getElementById("text1").value;

    if (co_x1 === "" && co_y1 === ""){
        return;
    }
    var sydney = new google.maps.LatLng(co_x1, co_y1);

    infowindow = new google.maps.InfoWindow();

    map1 = new google.maps.Map(
        document.getElementById('map'), {center: sydney, zoom: 15});

    var request = {
        query: `${findPlace}`,
        fields: ['name', 'geometry'],
    };

    service = new google.maps.places.PlacesService(map1);

    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }

            map1.setCenter(results[0].geometry.location);
        }
    });


}


function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map1,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map1, this);
    });
}

//////////////////////////find distance/////////////////////////
var findDistance = document.getElementById("findPlaceDistance");

findDistance.addEventListener("click",initMap2);
function initMap2() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map33 = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: parseFloat(co_x), lng:parseFloat(co_y) }
    });
    directionsDisplay.setMap(map33);

    //var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    //};
    //document.getElementById('start').addEventListener('change', onChangeHandler);
    //document.getElementById('end').addEventListener('change', onChangeHandler);
}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: "Toongabbie station",
        destination: "Toongabbie library",
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}