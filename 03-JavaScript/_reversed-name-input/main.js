function reversedName() {

    function getName() {
        let yourName = document.getElementById('yourName').value
        console.log(yourName)
        return yourName
    }

    function reverseName() {
        if (name) {
            let reversedName = name.split('').reverse().join('')
            console.log(reversedName)
            return reversedName
        }
    }

    let name = getName()
    let reversedName = reverseName()

    function displayNames() {
        let elOriginal = document.getElementById('name-original')
        let elReversed = document.getElementById('name-reversed')
        elOriginal.innerHTML = name
        elReversed.innerHTML = reversedName
    }
    
    displayNames()
}