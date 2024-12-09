// Event AND event Listening
// let button = document.querySelector("button");
// function changeButton()
// {
//     button.style.backgroundColor="green";
//     button.style.color="white";
//     button.innerHTML="Thanks for submitting you response";
// }

// button.addEventListener("click", changeButton);

// changeButton

let button= document.querySelector("button");
function openImage(){
 let image = document.querySelector(".img")
 image.style.display="block"
 let close = document.querySelector(".close")
 close.style.display ="block"
}
button.addEventListener("click" ,openImage)

let close= document.querySelector(".close");
function closeImage(){
 let image = document.querySelector(".img")
 image.style.display="none"
//  let button = document.querySelector("button")
//  close.style.display ="bl"
}
close.addEventListener("click" ,closeImage)