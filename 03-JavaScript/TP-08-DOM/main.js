let btnEvent = document.querySelectorAll('[data-event="onClick"]')
for (let i = 0; i < btnEvent.length; i++) {
    btnEvent[i].addEventListener('click', addToCart)
}

let total = 0

function addToCart(e) {

    let target = e.target
    let itemLabel = target.parentNode.parentNode.childNodes[1].innerText
    let itemPrice = parseInt(target.parentNode.parentNode.childNodes[3].innerText)
    
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let label = document.createTextNode(itemLabel)
    let price = document.createTextNode(itemPrice)
    td1.appendChild(label)
    td2.appendChild(price)
    let cart = document.getElementById('cart')
    cart.append(tr)
    let trs = document.getElementById('cart').childNodes

    for (let i = 1; i <= trs.length-1; i++) {
        trs[i].append(td1)
        trs[i].append(td2)
    }
    
    total = total + itemPrice
    let totalElement = document.getElementById('total')
    totalElement.setAttribute('value', total)

}
