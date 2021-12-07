(function main () {
    
    const colorsToFind = document.querySelector('#colors-to-find')
    const colorsPicker = document.querySelector('#colors-picker')
    const colorsResults = document.querySelector('#colors-results')
    const colors = ['orangered', 'dodgerblue', 'limegreen', 'gold']
    
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
    }

    // Select colorPicker cells.
    const colorsPickerCells = document.querySelectorAll('#colors-picker table tr td')
    const colorsResultsRows = document.querySelectorAll('#colors-results table tr')
    let countLine = 0
    let countCell = 0
    // Generate colors to pick.
    for (let i = 1; i < colorsPickerCells.length - (colorsPickerCells.length - colors.length - 1); i++) {
        const cell = colorsPickerCells[i]
        // Apply color.
        cell.style.backgroundColor = colors[i - 1]
        // Set color as attribute.
        cell.setAttribute('data-color', colors[i - 1])
        // On colorsPicker cell click.
        cell.addEventListener('click', function () {
            console.log(this.dataset.color)
            console.log(colorsResultsRows[countLine])
            if (colorsResultsRows[countLine]) {
                const cellToColor = colorsResultsRows[countLine].children[countCell + 1]
                console.log(cellToColor)
                cellToColor.style.backgroundColor = this.dataset.color
                cellToColor.setAttribute('data-color', this.dataset.color)
                countCell++
                if (countCell === 4) {
                    countCell = 0
                    countLine++
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
                    countCell = 0
                    countLine = 0
                }
            }
        })
    }


})()