const rps_moves = ["rock", "paper", "scissors"];
const rpsls_moves = ["rock", "paper", "scissors", "lizard", "spock"];
const select = document.getElementById("moves");
const gameType = document.getElementById("gameType")

function showMoves() {
    if (document.getElementById('rps').checked) {
        for(var i = 0; i < rps_moves.length; i++) {
            var move = rps_moves[i];
            var x = document.createElement("option");
            x.textContent = move;
            x.value = move;
            select.appendChild(x);
        }
        console.log("TEST")
    } else if (document.getElementById('rpsls').checked) {
        for(var i = 0; i < rpsls_moves.length; i++) {
            var move = rpsls_moves[i];
            var x = document.createElement("option");
            x.textContent = move;
            x.value = move;
            select.appendChild(x);
        }
        console.log("TEST2");
    }
}

gameType.addEventListener("change", () => {
    showMoves();
  });

async function play() {
    showMoves();
}

function reset() {

}

function toggleResults() {

}