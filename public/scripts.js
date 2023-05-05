const rps_moves = ["rock", "paper", "scissors"];
const rpsls_moves = ["rock", "paper", "scissors", "lizard", "spock"];

function showMoves() {
    move.innerHTML = "";
    if (document.getElementById('rps').checked) {
        rps_moves.forEach(m => {
            const x = document.createElement("move");
            x.value = m;
            x.textConent = x;
            move.appendChild(x);
        });
        console.log("TEST")
    } else if (document.getElementById('rpsls').checked) {
        rpsls_moves.forEach(m => {
            const x = document.createElement("move");
            x.value = m;
            x.textConent = x;
            move.appendChild(x);
        });
        console.log("TEST2");
    }
}

const playButton = document.getElementById("play");
playButton.addEventListener

async function play() {
    console.log("TEST2");
    showMoves();
}

playButton.addEventListener("click", () => {
    play();
  });

function reset() {

}

function toggleResults() {

}