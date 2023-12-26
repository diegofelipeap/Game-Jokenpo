const result = document.querySelector('.result')
const humanScore = document.querySelector('#score')
const machineScore = document.querySelector('#pc-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const GAME_OPTIONS = { //ENUM
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('humano: ' + human + ' maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = `Empatou!🤝`;
    }

    else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = `Você Ganhou!✅`;
    }

    else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = `Você Perdeu!☹`;
    }
}
