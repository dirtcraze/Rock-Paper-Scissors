let computerChoose = 0, userChoose = 0, drawGames = 0, userWin = 0,
compWin = 0, liczbaGier = 0;
const choose = ["Kamień", "Papier", "Nożyce"];

let kamien = document.getElementById("c0");
kamien.addEventListener("click", game);
let papier = document.getElementById("c1");
papier.addEventListener("click", game);
let nozyce = document.getElementById("c2");
nozyce.addEventListener("click", game);

let username = prompt('Podaj imię:');

function game() {
        liczbaGier +=1;
        liczbaGierP = document.getElementById("liczbaGier");
        liczbaGierP.innerHTML = `Liczba gier: ${liczbaGier}`;
        computerChoose = computerTurn();
        let compWybor = document.getElementById("compWybor");
        let userWybor = document.getElementById("userWybor");
        compWybor.innerText = "Wybór komputera: " + choose[computerChoose];
        userChoose = this.dataset.id;
        userWybor.innerText = "Twój wybór: " + choose[userChoose];
        endingInfo(computerChoose, userChoose);
}

function computerTurn() {
    computerChoose = Math.floor(Math.random() * 3);
    return computerChoose;
}

function endingInfo(computerChoose, userChoose) {
    let winnerInfo = document.getElementById("winnerInfo");

    if(computerChoose == userChoose) {
        winnerInfo.innerHTML = "Zwyciężca: Remis"
        drawGames +=1;
    }
    else if (userChoose == 0 && computerChoose == 2) {
        winnerInfo.innerHTML = `Zwyciężca: ${username}`
        userWin +=1;
    }
    else if (computerChoose > userChoose) {
        winnerInfo.innerHTML = "Zwyciężca: Komputer"
        compWin +=1;
    }
    else if (computerChoose == 0 && userChoose == 2) {
        winnerInfo.innerHTML = "Zwyciężca: Komputer"
        compWin +=1;
    }
    else {
        winnerInfo.innerHTML = `Zwyciężca: ${username}`
        userWin +=1;
    }


    userWinP = document.getElementById("userWin");
    userWinP.innerHTML = `Wygrane: ${userWin}`;
    compWinP = document.getElementById("compWin");
    compWinP.innerHTML = `Przegrane: ${compWin}`;
    drawGamesP = document.getElementById("drawGames");
    drawGamesP.innerHTML = `Remisy: ${drawGames}`;
}


