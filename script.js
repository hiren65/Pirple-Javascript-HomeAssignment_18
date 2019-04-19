//alert();


let apply = document.getElementById("Apply");
apply.addEventListener("click",findLocation);

function findLocation() {
    let co_x = document.getElementById("num1").value;

    let co_y = document.getElementById("num2").value;
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
