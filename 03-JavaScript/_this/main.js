(function main () {

    const ps = document.querySelectorAll('#root p')
    const as = document.querySelectorAll('a')

    const ethislog = function (e) {
        console.log(e)
        console.log(this)
    }

    for (let i = 0; i < ps.length; i++) {
        const p = ps[i]

        p.addEventListener('click', (e) => {
            console.log("J'ai cliqué sur un paragraphe !")
        })
        p.addEventListener('click', ethislog)
        
    }

    for (let i = 0; i < as.length; i++) {
        const link = as[i]

        link.addEventListener('click', (e) => {
            console.log("J'ai cliqué sur un lien !")
            e.preventDefault()
            e.stopPropagation()
        })
        link.addEventListener('click', ethislog)
        
    }

}) ()