(function main () {
    
    // Selectors.
    const colorsToFind          = document.querySelector('#colors-to-find')
    const colorsPicker          = document.querySelector('#colors-picker')
    const colorsToCheckNumbers  = document.querySelector('#colors-to-check-numbers')
    const colorsToCheck         = document.querySelector('#colors-to-check')
    const colorsResults         = document.querySelector('#colors-results')

    // Define colors to use for the game.
    const colors = ['orangered', 'dodgerblue', 'limegreen', 'gold', 'deeppink', 'purple']
    
    // Declarations of arrays.
    const colorsToFindArr = new Array()
    let colorsToCheckArr = new Array()
    let colorsFound = new Array()

    /**
     * Function - Create table.
     * @param {Number} rows - Number of rows.
     * @param {Number} cols - Number of cols.
     * @param {HTMLElement} element - Table will be created inside this HTML element.
     * @param {Boolean} numbers - If true, list numbers will be displayed.
     */
    const createTable = function (rows, cols, element, numbers = false) {
        const table = document.createElement('table')
        element.appendChild(table)
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('tr')
            table.appendChild(row)
            for (let j = 0; j < cols; j++) {
                const col = document.createElement('td')
                row.appendChild(col)
                // Display numbers if true.
                numbers && j === 0 && displayNumbers(i, col)
            }
        }
    }

    /**
     * Function - Display numbers.
     * @param {Number} i - Row index.
     * @param {HTMLElement} col - Number will be inserted inside this HTML element.
     */
    const displayNumbers = function (i, col) {
        col.innerText = i + 1
    }
    
    // Create tables.
    createTable(1, 4, colorsToFind)
    createTable(1, colors.length, colorsPicker)
    createTable(10, 1, colorsToCheckNumbers, true)
    createTable(10, 4, colorsToCheck)
    createTable(10, 4, colorsResults)

    // Select colorsToFind cells.
    const colorsToFindCells = document.querySelectorAll('#colors-to-find table tr td')
    // Generate random colors to find.
    for (let i = 0; i < colorsToFindCells.length; i++) {
        const cell = colorsToFindCells[i]
        // Generate random index for colors array based on.
        const randomColorIndex = Math.floor(Math.random() * colors.length)
        // Apply color.
        cell.style.backgroundColor = colors[randomColorIndex]
        // Set color as attribute.
        cell.setAttribute('data-color', colors[randomColorIndex])
        // Store in array to compare at check function.
        colorsToFindArr[i] = colors[randomColorIndex]
    }

    // Select colorPicker cells.
    const colorsPickerCells = document.querySelectorAll('#colors-picker table tr td')
    const colorsToCheckRows = document.querySelectorAll('#colors-to-check table tr')
    const colorsResultsRows = document.querySelectorAll('#colors-results table tr')
    let currentLine = 0
    let currentCell = 0
    // Generate colors to pick.
    for (let i = 0; i < colorsPickerCells.length; i++) {
        const cell = colorsPickerCells[i]
        // Apply color.
        cell.style.backgroundColor = colors[i]
        // Set color as attribute.
        cell.setAttribute('data-color', colors[i])
        // On colorsPicker's cell click.
        cell.addEventListener('click', function () {
            if (colorsToCheckRows[currentLine]) {
                const cellToColor = colorsToCheckRows[currentLine].children[currentCell]
                cellToColor.style.backgroundColor = this.dataset.color
                cellToColor.setAttribute('data-color', this.dataset.color)
                colorsToCheckArr[currentCell] = colors[i]
                // Go next cell.
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
        console.log(colorsToCheckArr)
        for (let i = 0; i < colorsToCheckArr.length; i++) {

            if (colorsToFindArr[i] == colorsToCheckArr[i]) {
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
        for (let i = 0; i < currentRow.children.length - (4-blackz); i++) {
            const cell = currentRow.children[i]

            if (i < currentRow.children.length) {
                cell.style.backgroundColor = 'black'
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
        
                console.log(colorsToCheckArr[indexValue] + ' = ' + whiteArrTmp[element])
                if (colorsToCheckArr[indexValue] == whiteArrTmp[element]) {
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
        for (let i = 0 + blackz; i < cells.length; i++) {
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