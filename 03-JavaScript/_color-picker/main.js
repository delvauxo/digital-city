function main() {
    
    // Get HTML elements.
    let colorpick = document.getElementById('colorpick')
    let bluepick = document.getElementById('bluepick')
    // Set numbers of rows and cols.
    let rows = 16
    let cols = 16

    // Function to create a table into HTML.
    // @rows - number of rows.
    // @cols - number of cols.
    // @element - HTML element.
    let createTable = function (rows, cols, element) {
        // Create table HTML element.
        let table = document.createElement('table')
        element.appendChild(table)
        for (let i = 0; i < rows; i++) {
        // Create row HTML element.
        let tr = document.createElement('tr')
            table.appendChild(tr)
            for (let j = 0; j < cols; j++) {
                // Create col HTML element.
                let td = document.createElement('td')
                tr.appendChild(td)
            }
        }
    }

    // Create COLORS table.
    createTable(rows, cols, colorpick)

    // Get rows and ceils.
    let colorLignes = document.querySelectorAll('#colorpick table tr')
    let colorCellules = document.querySelectorAll('#colorpick table td')
    // Initialise red and green colors.
    let red = 0
    let green = 0

    for (let i = 0; i < colorLignes.length; i++) {
        let ligne = colorLignes[i]
        // Get ceils of current row.
        let cellules = ligne.childNodes
        // Reset green color for next row.
        green = 0
        // Change red color for next ceils at next row.
        red += (255 / rows)

        for (let j = 0; j < cellules.length; j++) {
            let cellule = cellules[j]
            // Set red and green background color to ceil.
            cellule.style.backgroundColor = `rgb(${red}, ${green}, 0)`
            // Change green color for next ceil.
            green += (255 / cols)
            // Set red and green colors value as attribute.
            cellule.setAttribute('data-red', red)
            cellule.setAttribute('data-green', green)
        }
    }

    // Create BLUE table picker.
    createTable(1, colorLignes.length, bluepick)

    // Get ceils of BLUE table picker.
    let blueCellules = document.querySelectorAll('#bluepick table tr td')
    // Initialise blue color and opacity.
    let blue = 0
    let opacity = 0

    for (let i = 0; i < blueCellules.length; i++) {
        const cellule = blueCellules[i]
        // Set blue background color to ceil.
        cellule.style.backgroundColor = `rgb(0, 0, ${blue}, ${opacity})`
        // Set blue color value and opacity value as attribute.
        cellule.setAttribute('data-blue', blue)
        cellule.setAttribute('data-opacity', opacity)
        // Change blue color and opacity for next ceil.
        blue += 255 / blueCellules.length
        opacity += 1 / blueCellules.length
        // On mouse over.
        cellule.addEventListener('mouseover', e => {
            target = e.target
            // Get blue color from attribute.
            blue = target.dataset.blue
            for (let j = 0; j < colorCellules.length; j++) {
                const elem = colorCellules[j]
                // Get red and green colors from attributes.
                let red = elem.dataset.red
                let green = elem.dataset.green
                // Set blue background color to ceil.
                elem.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
            }
        })
    }
}

main()