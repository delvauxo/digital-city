function main() {

    let string = 'ma formation javascript'
    
    // Retourner la position de « ma ».
    console.log(string.indexOf('ma'))

    // Indiquer l’indice de la lettre « p ».
    console.log(string.indexOf('p'))

    // Retrouver la lettre située à l’indice 21.
    console.log(string.charAt(21))

    // Remplacer « javascript » par « Java ».
    console.log(string.replace('javascript', 'Java'))

    // Découper la chaîne avec le délimiteur « » (espace).
    console.log(string.split(' '))

    // Inverser la chaîne de caractères (+ difficile) : « ma formation javascript » « tpircsavaj noitamrof am ».
    console.log(string.split('').reverse().join(''))
}

main()