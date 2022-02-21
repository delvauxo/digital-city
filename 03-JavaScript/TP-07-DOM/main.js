function myInput() {
    
    let input = window.prompt('Entrez votre text à insérer')
    if (input) {
        let tag = document.createElement('li')
        let text = document.createTextNode(input)
        tag.appendChild(text)
        let el = document.getElementById('list')
        el.appendChild(tag)
    }

}