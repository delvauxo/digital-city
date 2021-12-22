// 
// Need to start a server if you want to make it work.
// 
const xhr = new XMLHttpRequest()
xhr.open('get', './data.txt', false)
xhr.send()

console.log(xhr.response);

const demo = document.querySelector('#root')
demo.innerHTML = xhr.responseText