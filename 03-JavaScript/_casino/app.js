(function main() {

    /**
     * Function.
     * @param {Int} max - maximum value.
     * @returns a random integer.
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let pot = 10000
    let bet = 0
    let gain = 0
    let win = false
    
    // Selectors.
    const btnBets = document.querySelectorAll('#btn-bets .btn')
    const btnPlay = document.querySelector('#btn-play')
    const btnLeave = document.querySelector('#btn-leave')
    const jackpot = document.querySelector('#imagejackpot')
    const jackpotWheels = document.querySelectorAll('#imagejackpot img')
    const jackpotMessage = document.querySelector('#message-display')
    const jackpotResult = new Array()
    let message = new String()

    jackpot.classList.remove('message')


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
            if (bet > pot && pot > 0) {
                // Remove message.
                jackpotMessage.classList.remove('hide')
            }
        })
    }

    
    btnPlay.addEventListener('click', function () {
        if (bet !== 0) {
            if (pot > 0 && pot >= bet) {
                    
    
    
                for (let i = 0; i < jackpotWheels.length; i++) {
                    const wheel = jackpotWheels[i]
                    let rand = getRandomInt(6) + 1
                    wheel.setAttribute('src', `./img/${rand}.png`)
                    jackpotResult[i] = rand
                }

                const counts = {}
                for (const num of jackpotResult) {
                    counts[num] = counts[num] ? counts[num] + 1 : 1
                }
                console.log(jackpotResult)
                console.log(counts)

                if (Object.keys(counts).length === 1) {
                    win = true
                } else {
                    win = false
                }
                    
                if (win) {
                    // It's won.
                    console.log('won :)')
                    const jackpotId = jackpotResult[0]

                    switch (jackpotId) {
                        case 1:
                            gain = bet * 2
                            break
                        case 2:
                            gain = bet * 2
                            break
                        case 3:
                            gain = bet * 3
                            break
                        case 4:
                            gain = bet * 5
                            break
                        case 5:
                            gain = bet * 10
                            break
                        case 6:
                            gain = bet * 20
                            break
                    
                        default:
                            gain = 0
                            break
                    }
                    // Add gain to current pot.
                    pot += gain
                } else {
                    // It's lost.
                    console.log('lost')
                    // Substract bet from current pot.
                    pot -= bet
                }
                console.log('bet : ', bet)
                console.log('pot : ', pot)
            } else {
                console.log('You don\'t have enough money !')
                message = 'You don\'t have enough money !'
            }
        } else {
            console.log('please choose your bet')
            message = 'Please choose your bet.'
        }
    })

    btnLeave.addEventListener('click', function () {
        location.reload()
    })

})()