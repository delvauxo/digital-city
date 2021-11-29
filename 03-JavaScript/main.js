function reverseName() {
    function getName() {
        let yourName = document.getElementById('yourName').value
        console.log(yourName)
        return yourName
    }
    let name = getName()
    if (name) {
        let reversedName = name.split('').reverse('').join('')
        console.log(reversedName)
    }
    function displayName() {
        let el = document.getElementById('name-reversed')
        el.innerHTML = name
    }
}