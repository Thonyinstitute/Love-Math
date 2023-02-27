
// wait for the DOM to finish loading before running the game
// get the button elements and add the event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("data-type")==="submit"){
                alert("You clicked Submit");   
            } else{
                let gametype=this.getAttribute("data-type");

                alert(`You clicked ${gametype}`);
                rungame(gametype);
            }
        })
    }


    rungame("addition");

})


/** 
 * the main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
*/

function rungame(gametype) {

    // create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gametype==="addition") {
        displayAdditionQuestion(num1, num2);
    }else {
        alert(`unknown game type: ${gameType}`);
        throw `unknown game type: ${gametype}. Arborting!`;
    }
}

function checkAnswer () {

}


function  calculateCorrectAnswer() {

}

function  incrementScore() {

}

function  incrementWrongAnswer() {

}

function  displayAdditionQuestion(operand1, operand2) {
    
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function  displaySubtractQuestion() {

}

function  displayMultiplyQuestion() {

}

function  displayDivisionQuestion() {

}

