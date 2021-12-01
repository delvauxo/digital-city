let frequence = function (sentence) {
    
    let words = sentence.toLowerCase().split(' ')

    let count = {}

    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (count[word] == undefined) {
            count[word] = 1
        } else {
            count[word]++
        }
    }
    return count
}

let student1 = {
    nom: 'Jean',
    note: [15, 16, 18]
}
let student2 = {
    nom: 'Marc',
    note: [6, 18, 20]
}

let isBetter = function (student1, student2) {
    
}

isBetter()