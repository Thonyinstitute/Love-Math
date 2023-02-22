
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for ( let button of buttons) {
        button.addEventListener ("click", function() {
            if(this.getAttribute("data-type") ==="submit") {
                alert("You click Submit!");
            } else {
                let gametype = this.getAttribute("data-type");
                alert(`You Clicked ${gametype}`);
            }
        })

    }
})





function rungame() {

}

function checkAnswer () {

}


function  calculateCorrectAnswer() {

}

function  incrementScore() {

}

function  incrementWrongAnswer() {

}

function  displayAdditionQuestion() {

}

function  displaySubtractQuestion() {

}

function  displayMultiplyQuestion() {

}

function  displayDivisionQuestion() {

}

