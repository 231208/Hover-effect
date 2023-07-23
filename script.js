var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})

//This is first word hover program
document.querySelector("#overlay1").addEventListener("mousemove", function(dets){
    document.querySelector("#elem1 img").style.scale = 1
    document.querySelector("#elem1 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem1 img").style.left = (dets.x-300) + "px"
    document.querySelector("#elem1 img").style.top = (dets.y-250) + "px"
})

document.querySelector("#overlay1").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem1 img").style.scale = 0
    document.querySelector("#elem1 img").style.opacity = 0
    cursor.style.opacity = 1
})

//This is second word hover program
document.querySelector("#overlay2").addEventListener("mousemove", function(dets){
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.opacity = 1
    cursor.style.opacity= 0
    document.querySelector("#elem2 img").style.left = (dets.x-500) + "px"
    document.querySelector("#elem2 img").style.top = (dets.y-290) +  "px"
})

document.querySelector("#overlay2").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem2 img").style.scale = 0
    document.querySelector("#elem2 img").style.opacity = 0
})

//This is third word hover program
document.querySelector("#overlay3").addEventListener("mousemove", function(dets){
    document.querySelector("#elem3 img").style.scale = 1
    document.querySelector("#elem3 img").style.opacity = 1
    cursor.style.opacity= 0
    document.querySelector("#elem3 img").style.left = (dets.x-900) + "px"
    document.querySelector("#elem3 img").style.top = (dets.y-290) +  "px"
})

document.querySelector("#overlay3").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem3 img").style.scale = 0
    document.querySelector("#elem3 img").style.opacity = 0
})

//Important Remark: here are we use For Each Loop 
//here are two events are use 1- mousemove & 2- mouseleave
//#overlay is a layer
//elem is a layer


//Thanks Pm.