let tableColors = document.querySelector('#table-colors')

if (tableColors.getContext) {
    
    // Table settings.
    const TABLE_CELLS = 6
    const TABLE_ROWS = 6

    // Canvas size.
    tableColors.width = (TABLE_CELLS * 50) + 100;
    tableColors.height = (TABLE_ROWS * 50) + 100;

    // Set context.
    const CTX = tableColors.getContext('2d')

    let x = 50
    let y = 50
    let red = 255
    let redIncrementer = 255 / (TABLE_ROWS - 1)
    let green = 255
    let greenIncrementer = 255 / (TABLE_CELLS - 1)
    let blue = 0

    for (let i = 0; i < TABLE_ROWS; i++) {
        for (let j = 0; j < TABLE_CELLS; j++) {
            // Create squares.
            CTX.fillStyle = `rgb(${red}, ${green}, ${blue})`
            CTX.fillRect(x, y, 50, 50)
            // Decrement green.
            green -= greenIncrementer
            // Increment x.
            x = x + 50
        }
        // Reset x at start position.
        x = 50
        // Increment y.
        y = y + 50
        // Reset green at start color.
        green = 255
        // Decrement red.
        red -= redIncrementer
    }

    console.log(CTX)
    
}
