function refresh() { 
    location.reload() 
    elemWidthTop.innerHTML = elemWidthTopValue
    elemWidthBottom.innerHTML = elemWidthBototmValue
}

var clientWidth = document.documentElement.clientWidth /* 1200 */
var elemWidthTop = document.getElementById('measure-top')
var elemWidthTopValue = elemWidthTop.clientWidth
var elemWidthBottom = document.getElementById('measure-bottom')
var elemWidthBottomValue = elemWidthBottom.clientWidth
elemWidthTop.innerHTML = elemWidthTopValue
elemWidthBottom.innerHTML = elemWidthBottomValue



// window.innerWidth /* 1200 */
// window.outerWidth /* 1200 */