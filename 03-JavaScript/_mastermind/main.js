(function main () {
    
    const colorsToFind = document.querySelector('#colors-to-find')
    const colorsPicker = document.querySelector('#colors-picker')
    const colorsResults = document.querySelector('#colors-results')
    const colors = ['orangered', 'dodgerblue', 'limegreen', 'gold']
    const colorsToFindArr = new Array()
    let colorsToCheck = new Array()
    let colorsFound = new Array()

    // Function to create tables.
    const createTable = function (rows, cols, element, listNumbers = false) {
        const table = document.createElement('table')
        element.appendChild(table)
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('tr')
            table.appendChild(row)
            for (let j = 0; j < cols; j++) {
                const col = document.createElement('td')
                row.appendChild(col)
                // Create list of numbers for rows.
                if (j === 0 && listNumbers) {
                    col.innerHTML = i + 1
                }
            }
        }
    }
    
    // Create tables.
    createTable(1, colors.length + 6, colorsToFind)
    createTable(1, colors.length + 6, colorsPicker)
    createTable(10, colors.length + 6, colorsResults, true)

    // Select colorsToFind cells.
    const colorsToFindCells = document.querySelectorAll('#colors-to-find table tr td')
    // Generate random colors to find.
    for (let i = 1; i < colorsToFindCells.length - (colorsToFindCells.length - colors.length - 1); i++) {
        const cell = colorsToFindCells[i]
        // Generate random index for colors array based on.
        const randomColorIndex = Math.floor(Math.random() * colors.length)
        // Apply color.
        cell.style.backgroundColor = colors[randomColorIndex]
        // Set color as attribute.
        cell.setAttribute('data-color', colors[randomColorIndex])
        // Store in array to compare at check function.
        colorsToFindArr[i - 1] = colors[randomColorIndex]
    }

    // Select colorPicker cells.
    const colorsPickerCells = document.querySelectorAll('#colors-picker table tr td')
    const colorsResultsRows = document.querySelectorAll('#colors-results table tr')
    let currentLine = 0
    let currentCell = 0
    // Generate colors to pick.
    for (let i = 1; i < colorsPickerCells.length - (colorsPickerCells.length - colors.length - 1); i++) {
        const cell = colorsPickerCells[i]
        // Apply color.
        cell.style.backgroundColor = colors[i - 1]
        // Set color as attribute.
        cell.setAttribute('data-color', colors[i - 1])
        // On colorsPicker's cell click.
        cell.addEventListener('click', function () {
            if (colorsResultsRows[currentLine]) {
                const cellToColor = colorsResultsRows[currentLine].children[currentCell + 1]
                cellToColor.style.backgroundColor = this.dataset.color
                cellToColor.setAttribute('data-color', this.dataset.color)
                colorsToCheck[currentCell] = colors[i - 1]
                currentCell++
                if (currentCell === 4) {

                    const black = checkLineBlack()
                    console.log(black)
                    setBlack(colorsResultsRows[currentLine], black)
                    const white = checkLineWhite()
                    setWhite(colorsResultsRows[currentLine], black, white)


                    currentCell = 0
                    currentLine++

                }
            // Game is over.
            } else {
                window.alert("Vous n'avez plus de chance !")
                const tryAgain = window.confirm("Voulez vous recommencer ?")
                if (tryAgain) {
                    const colorsResultsCells = document.querySelectorAll('#colors-results table tr td[data-color]')
                    for (let i = 0; i < colorsResultsCells.length; i++) {
                        const cell = colorsResultsCells[i]
                        cell.style.backgroundColor = 'transparent'
                        cell.removeAttribute('data-color')
                    }
                    console.log(colorsResultsCells)
                    currentCell = 0
                    currentLine = 0
                }
            }
        })


    }

    let checkLineBlack = function () {
        console.log(colorsToFindArr)
        console.log(colorsToCheck)
        for (let i = 0; i < colorsToCheck.length; i++) {

            if (colorsToFindArr[i] == colorsToCheck[i]) {
                colorsFound[i] = 'rcrp'
            } else {
                colorsFound[i] = null
            }
        }
        console.log(colorsFound)

        const blackCounnt = colorsFound.reduce((acc, value) => value == 'rcrp' ? ++acc : acc, 0);

        return blackCounnt
    }

    let setBlack = function (currentRow, blackz) {
        console.log(currentRow)
        for (let i = 6; i < currentRow.children.length; i++) {
            const element = currentRow.children[i]

            if (i < currentRow.children.length - (4 - blackz)) {
                element.style.backgroundColor = 'black'
            }

        }
    }

    function getAllIndexes(arr, val) {
        let indexes = [], i = -1
        while ((i = arr.indexOf(val, i+1)) != -1){
            indexes.push(i)
        }
        return indexes
    }


    let checkLineWhite = function () {
        let indexes = getAllIndexes(colorsFound, null)
        console.log('indexes', indexes)
        
        // Count of white ticks.
        let whiteCount = 0
        // temp array of white ticks.
        const whiteArrTmp = [...colorsToFindArr]

        console.log('whiteArrTmp', whiteArrTmp)
        for (const i in indexes) {
            const indexValue = indexes[i]
            // console.log('forIN i --- ', i)
            // console.log('forIN i element --- ', indexValue)

            for (const j in indexes) {
                const element = indexes[j]
                // console.log('forIN j ', j)
                // console.log('forIN j element', element)
        
                console.log(colorsToCheck[indexValue] + ' = ' + whiteArrTmp[element])
                if (colorsToCheck[indexValue] == whiteArrTmp[element]) {
                    whiteArrTmp[element] = null
                    whiteCount++
                    break
                }
                console.log(whiteCount)
                console.log(whiteArrTmp)
            }
        }

        console.log('whiteCount', whiteCount)
        return whiteCount
    }

    let setWhite = function (currentRow, blackz, whitez) {
        const cells = currentRow.children
        for (let i = 6 + blackz; i < cells.length; i++) {
            const cell = cells[i]
            
            console.log(whitez)
            if (whitez > 0) {
                cell.style.backgroundColor = 'pink'
                whitez--
            }
            
        }
    }



})()

// Check 1er tour la position et la couleur de chaque pion
// Si trouvé, on remplace par null la couleur dans un tab tmp (black)
// Check dans ce tab tmp les couleurs restantes aux index qui n'ont pas été remplacés par null
// Si trouvé on remplace par null la couleur dans un tab tmp (white) et on incrémente le count de white