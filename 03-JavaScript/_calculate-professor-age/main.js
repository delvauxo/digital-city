function main() {
    
    const birthDate = new Date(1987, 03, 24)
    const birthDateTime = birthDate.getTime()
    console.log(birthDateTime)

    const curDate = new Date()
    const curDateTime = curDate.getTime()
    console.log(curDateTime)

    const ageDateTime = curDateTime - birthDateTime
    const ageDate = new Date(ageDateTime)
    console.log((ageDate.getFullYear())-1970)

}

main()