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

// ------------------------------------------------
// Average points
// ------------------------------------------------

let student1 = {
    name: 'Jean',
    points: [15, 16, 18, 2]
}
let student2 = {
    name: 'Marc',
    points: [6, 18, 20, 18]
}

let pointsAvg = function (points) {
    let avg = 0
    for (let i = 0; i < points.length; i++) {
        avg += points[i]
    }
    avg = Math.round(avg/points.length)
    return avg
}

console.log(pointsAvg(student2.points))

let isBetter = function (student1, student2) {
    return pointsAvg(student1.points) > pointsAvg(student2.points)
}

console.log(isBetter(student1, student2))