
// Detectuing button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

        var buttonInnerHTML = this.innerHTML;
       
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
            
});
}

// Detecting keyboard press

document.addEventListener("keypress", function(event) {
    
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  
  switch(key) { 
    case "K":
          var tom1 = new Audio('Sounds/tom-1.mp3');
            tom1.play();
            break;

            case "C":
          var tom2 = new Audio('Sounds/tom-2.mp3');
            tom2.play();
            break;

            case "H":
          var tom3 = new Audio('Sounds/tom-3.mp3');
            tom3.play();
            break;

            case "A":
          var tom4 = new Audio('Sounds/tom-4.mp3');
            tom4.play();
            break;

            case "N":
          var snare = new Audio('Sounds/snare.mp3');
            snare.play();
            break;

            case "D":
          var crash = new Audio('Sounds/crash.mp3');
            crash.play();
            break;

            case "U":
          var kick = new Audio('Sounds/kick-bass.mp3');
            kick.play();
            break;

            default: console.log(buttonInnerHTML);
        }
      }


      function buttonAnimation(currentKey) {


        var activeButton = document.querySelector("." + cuurentKey);

        activeButton.classList.add("pressed");

        setTimeout(function() {

          activeButton.classList.remove("pressed");
        }, 100);


      }
    

