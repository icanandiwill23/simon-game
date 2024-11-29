let gamePattern = [];

let userClickedPattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

$(document).on("keypress", function(){
    
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

function nextSequence(){
    userClickedPattern = [];

    level++;
 
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColors[randomNumber];

    gamePattern.push(randomChosenColour);

    console.log($(randomChosenColour));

    animatePress(randomChosenColour);

    playSound(randomChosenColour);

}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success!");

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }

    else {
        console.log("Wrong!");

        playSound("wrong");

        $("body").addClass("game-over");


        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function playSound(event){
    var userSound = new Audio("./sounds/" + event + ".mp3");
    userSound.play();
}

function animatePress(color){

    let selectedButton = "#" + color;

    $(selectedButton).fadeIn(100).fadeOut(100).fadeIn(100);

    $(selectedButton).addClass("pressed");

    setTimeout(function(){
        $(selectedButton).removeClass("pressed");
    }, 100);
}
// My First Attempt
// $(document).on("keypress", function(){
//     $("h1").text("Level 1");

    

// });

// $(document).on("click", colorRun);

// function colorRun(){
//     let level1 = ["red", "blue", "green", "yellow"];

//     for(var i=0; i<level1.length; i++){
//         var color = level1[i];
//         if(color == "red"){
//             redSound();
//         }
//         else if (color == "blue"){
//             blueSound();
//         }
//         else if (color == "yellow"){
//             yellowSound();
//         }
//         else if (color == "green"){
//             greenSound();
//         }
//     }
// }

// function redSound(){
//     $("#red").on("click", function(){
//         const redSound = new Audio("./sounds/red.mp3");
//         redSound.play();

//         $(this).addClass("pressed");

//         setTimeout(function(){
//             $("#red").removeClass("pressed");
//         }, 150);
//     });
// }

// function blueSound(){
//     $("#blue").on("click", function(){
//         const blueSound = new Audio("./sounds/blue.mp3");
//         blueSound.play();

//         $(this).addClass("pressed");

//         setTimeout(function(){
//             $("#blue").removeClass("pressed");
//         }, 150);
//     });
// }

// function greenSound(){
//     $("#green").on("click", function(){
//         const greenSound = new Audio("./sounds/green.mp3");
//         greenSound.play();

//         $(this).addClass("pressed");

//         setTimeout(function(){
//             $("#green").removeClass("pressed");
//         }, 150);
//     });
// }

// function yellowSound(){
//     $("#yellow").on("click", function(){
//         const yellowSound = new Audio("./sounds/yellow.mp3");
//         yellowSound.play();

//         $(this).addClass("pressed");

//         setTimeout(function(){
//             $("#yellow").removeClass("pressed");
//         }, 150);
//     });
// }

// function buttonSounds(){
    
// }