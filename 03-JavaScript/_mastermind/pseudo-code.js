const colorsToFind    = ['gold', 'dodgerblue', 'orangered', 'orangered']
const colorsToCheck   = ['dodgerblue', 'gold', 'orangered', 'orangered']

const black           = [null, null, 'rcrp', 'rcrp']

console.log(colorsToFind)
console.log(colorsToCheck)
console.log(black)

console.log(2)

const indexes = [0, 1]
console.log(indexes)


let whiteCount = 0
for (let i = indexes[0]; i < colorsToCheck.length; i++) {
    console.log('i --- ', i)

    for (const key in indexes) {
        const element = indexes[key]
        console.log('element', element)

        if (colorsToCheck[i] == colorsToFind[element]) {
            whiteCount++
        }

    }
    console.log('whiteCount', whiteCount)
}