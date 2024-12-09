// Event AND event Listening
let button = document.querySelector("button");
function changeButton()
{
    button.style.backgroundColor="green";
    button.style.color="white";
    button.innerHTML="Thanks for submitting you response";
}

button.addEventListener("click", changeButton);

// changeButton