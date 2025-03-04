const button1 = document.getElementById("button1");
let text = document.getElementById("Text");
let clicks = 0;

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
}
