var numberDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    console.log(this);
    var buttonId = this.innerHTML;

    makeSound(buttonId);

    buttonAnimation(buttonId);
}

document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});

function makeSound(id) {
    switch (id) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            break;
        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            var sound = new Audio("sounds/snare.mp3");
            break;
        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            var sound = new Audio("sounds/tom-4.mp3");
            break;
        default:
            console.log(id.innerHTML);
    }
    sound.play();
    console.log(sound)
}

function buttonAnimation(currentKey) {
    var button = document.querySelector("." + currentKey);

    button.classList.add("pressed");
    button.style.color = "white";

    setTimeout(function() {
        button.classList.remove("pressed");
        button.style.color = "#DA0463";
    }, 100);
}
