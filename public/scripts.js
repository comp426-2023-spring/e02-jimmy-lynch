const rps_moves = ["rock", "paper", "scissors"];
const rpsls_moves = ["rock", "paper", "scissors", "lizard", "spock"];
const select = document.getElementById("moves");
const gameType = document.getElementById("gameType")

function showMoves() {
    clearMoves();
    if (document.getElementById('rps').checked) {
        for(var i = 0; i < rps_moves.length; i++) {
            var move = rps_moves[i];
            var x = document.createElement("option");
            x.textContent = move;
            x.value = move;
            select.appendChild(x);
        }
    } else if (document.getElementById('rpsls').checked) {
        for(var i = 0; i < rpsls_moves.length; i++) {
            var move = rpsls_moves[i];
            var x = document.createElement("option");
            x.textContent = move;
            x.value = move;
            select.appendChild(x);
        }
    }
}

function clearMoves() {
    var i, L = select.options.length - 1;
    for(i = L; i >= 0; i--) {
       select.remove(i);
    }
}

async function play() {
    showMoves();
}

function reset() {
    clearMoves()
    document.getElementById("rps").checked = false;
    document.getElementById("rpsls").checked = false;
    document.getElementById("random").checked = false;
    document.getElementById("opponent").checked = false;

}

function toggleResults() {

}