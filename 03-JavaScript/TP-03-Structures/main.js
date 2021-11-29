function main() {
    
    // Getting current date.
    let date = new Date()
    console.log(date)

    // Getting day of the current date.
    let day = date.getDay()
    console.log(day)

    let dayFull

    // Bonjour, nous sommes lundi!
    switch(day) {
        case 1:
            dayFull = 'lundi'
            break
        case 2:
            dayFull = 'mardi'
            break
        case 3:
            dayFull = 'mercredi'
            break
        case 4:
            dayFull = 'jeudi'
            break
        case 5:
            dayFull = 'vendredi'
            break
        case 6:
            dayFull = 'samedi'
            break
        case 7:
            dayFull = 'dimanche'
            break
        default:
            console.log('Je ne sais pas quel jour nous sommes!')
    }

    console.log('Bonjour, nous sommes ' + dayFull + '!')

}

main()