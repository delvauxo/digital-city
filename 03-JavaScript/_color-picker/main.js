function main() {

    let colorpick = document.getElementById('colorpick')
    let bluepick = document.getElementById('bluepick')
    let rows = 16
    let cols = 16

    let createTable = function (rows, cols, element) {
        let table = document.createElement('table')
        element.appendChild(table)
        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr')
            table.appendChild(tr)
            for (let j = 0; j < cols; j++) {
                let td = document.createElement('td')
                tr.appendChild(td)
            }
        }
    }

    // Create colors table.
    createTable(rows, cols, colorpick)

    // Red and green.
    let colorLignes = document.querySelectorAll('#colorpick table tr')
    console.log(colorLignes)
    let red = 0

    for (let i = 0; i < colorLignes.length; i++) {
        let ligne = colorLignes[i];
        let cellules = ligne.childNodes

        let green = 0
        red += (255 / (rows))
        console.log(cellules)

        for (let j = 0; j < cellules.length; j++) {
            let cellule = cellules[j];
            cellule.style.backgroundColor = `rgb(${red}, ${green}, 0)`
            green += (255 / cols)
        }
    }

    // Create blue table picker.
    createTable(1, 16, bluepick)

    // blue.
    let blueCellules = document.querySelectorAll('#bluepick table tr td')
    console.log(blueCellules);
    let blue = 0
    let opacity = 0

    for (let i = 0; i < blueCellules.length; i++) {
        let calc = 255/blueCellules.length;
        const cellule = blueCellules[i];
        cellule.style.backgroundColor = `rgb(0, 0, ${blue}, ${opacity})`
        blue += blueCellules.length
        opacity += 1/blueCellules.length
        cellule.addEventListener('mouseover', e => {
            target = e.target
            console.log(target);
            let test = document.querySelectorAll('#colorpick table td')
            console.log(test);
            for (let z = 0; z < test.length; z++) {
                const el = test[z]
                console.log(el);
                let currentColor = el.attributes[0].nodeValue
                console.log(currentColor)
                // currentColor = currentColor.replace('background-color: ', '')
                // currentColor = currentColor.replace(", 0)", `, ${i*calc})`)
                // currentColor = currentColor.replace(';', '')
                console.log(currentColor)
                el.style.background = currentColor
                
                
            }
        })
    }


}


main()