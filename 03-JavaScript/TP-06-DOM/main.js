function addElement() {

    let tag = document.createElement('li')
    let text = document.createTextNode('ma formation Javascript')
    tag.appendChild(text)
    let el = document.getElementById('list')
    el.appendChild(tag)

}