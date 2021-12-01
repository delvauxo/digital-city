function isPrime(nbr) {

    let isPrime = true

    for (let i = 2; i < nbr; i++) {
        if (nbr % i == 0) {
            isPrime = false
            console.log(nbr + " n'est pas premier !")
            console.log(nbr + ' est divisible par ' + i);
            break
        }
    }

    if (isPrime) {
        console.log(nbr + " est premier !")
    }

}

isPrime(97)