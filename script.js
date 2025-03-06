const button1 = document.getElementById("button1");
let text = document.getElementById("Text");
let clicks = 0;
let click = new Audio("Assets/clicker.mp3");
click.play();
button1.addEventListener("click",yell_at_user);
function yell_at_user() {
    clicks++;
    if(clicks == 1){
        text.innerHTML = "Hey! Stop that!";
    }
    else if(clicks == 3){
        text.innerHTML = "Im warning you!";
    }
    else if(clicks == 7){
        button1.classList.add("text");
        button1.classList.add("angry");
        text.innerHTML = "Now try to catch me!";
    }
    else if( clicks == 10) {
        button1.classList.remove("angry");
        const button2 = document.createElement("button2");
        button2.classList.add("button1");
        button2.classList.add("button2");
        text.innerHTML = "Click that button instead.";
    }
    else if( clicks == 15){
        text.innerHTML = "Alright thats it. Im out";
    }
    else if(clicks == 16){
     button2.classList.remove("button2")
    }
}
