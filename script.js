let buttons = document.querySelectorAll('.button');
let showWinner = document.getElementById('show-winner');
let userScorePara = document.getElementById('user-score');
let cpuScorePara = document.getElementById('cpu-score');

let userScore = 0;
let cpuScore = 0;


// generate cpu choice

const getCpuChoice = () => {
    const choiceNum = parseInt(Math.random() * 3);
    const cpuChoiceSet = ['rock', 'paper', 'scissors'];
    const cpuChoice = cpuChoiceSet[choiceNum];
    return cpuChoice;
}

// get user choices
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const userChoice = button.getAttribute('id');
        match(userChoice);
        getCpuChoice();
    });
});


// match the choices
const match = (userChoice) => {
    const cpuChoice = getCpuChoice();
    if (userChoice === cpuChoice) {
        drawMatch();
    } else {
        let userwin = true;
        if (cpuChoice === 'rock') {
            userwin = userChoice === 'paper' ? true : false;
        } else if (cpuChoice === 'paper') {
            userwin = userChoice === 'scissors' ? true : false;
        } else if (cpuChoice === 'scissors') {
            userwin = userChoice === 'rock' ? true : false;
        }
        result(userwin);
    }
}
const result = (userwin) => {
    if (userwin === true) {
        userScore = userScore + 1;
        showWinner.innerHTML = 'Congratulation! you win.'
        userScorePara.innerHTML = userScore;
    } else {
        cpuScore = cpuScore + 1;
        showWinner.innerHTML = 'Oops! you lose'
        cpuScorePara.innerHTML = cpuScore;
    }
}




// funtion for draw match
const drawMatch = () => {
    showWinner.innerHTML = 'Match draw';
}

// function for check winner
// const checkWinner = (userChoice, cpuChoice) => {
//     if (cpuChoice === rock && userChoice === paper) {
//         console.log(cpuChoice, userChoice);
//         console.log("winner is user");
//     } else if (cpuChoice === rock && userChoice === scissors) {
//         console.log(cpuChoice, userChoice);
//         console.log("winner is cpu");
//     } else if (cpuChoice === paper && userChoice === rock) {
//         console.log(cpuChoice, userChoice);
//         console.log("winner is cpu");
//     } else if (cpuChoice === paper && userChoice === scissors) {
//         console.log(cpuChoice, userChoice);
//         console.log("winner is user");
//     } else if (cpuChoice === scissors && userChoice === rock) {
//         console.log(cpuChoice, userChoice);
//         console.log("winner is user");
//     } else if (cpuChoice === scissors && userChoice === paper) {
//         console.log(cpuChoice, userChoice);
//         console.log("winner is cpu");
//     }
// }