//alert();


let apply = document.getElementById("Apply");
apply.addEventListener("click",findLocation);

function findLocation() {
    let co_x = document.getElementById("num1").value;

    let co_y = document.getElementById("num2").value;
    console.log("x: "+co_x +" y: "+co_y);
}
