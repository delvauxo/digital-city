// 3 x image 1 = bet * 2
// 3 x image 2 = bet * 2
// 3 x image 3 = bet * 3
// 3 x image 4 = bet * 5
// 3 x image 5 = bet * 10
// 3 x image 6 = bet * 20

(function main() {

    let machine = 1000000
    let pot = 10000
    let bet = 0
    
    // Selectors.
    const btnBets = document.querySelectorAll('#btn-bets .btn')
    const btnPlay = document.querySelector('#btn-play')
    const resultWarning = document.querySelector('#result #result-warning')
    const resultDisplay = document.querySelector('#result #result-display')

    for (const btn of btnBets) {
        btn.addEventListener('click', function (e) {
            // Set bet.
            bet = parseInt(this.dataset.bet)
            // Remove class from current active button.
            btnBets.forEach(item => {
                item.classList.remove('btn-bet')
            });
            // Set class on active bet button.
            this.classList.toggle('btn-bet')
            // Set class on HTML element (pick a bet).
            resultWarning.classList.add('hide')
        })
    }

    btnPlay.addEventListener('click', function () {
        console.log('play')
        if (bet !== 0) {
            console.log('bet : ', bet)
            resultDisplay.textContent = 'your bet : ' + bet
        } else {
            resultWarning.classList.remove('hide')
            console.log('please choose your bet')
        }
    })
    

})()