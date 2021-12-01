let classA = [
    {
        name: 'Marc',
        average: 15
    },
    {
        name: 'Olivier',
        average: 18
    },
    {
        name: 'Jean',
        average: 7
    },
    {
        name: 'Marie',
        average: 4
    }
]

var hasAverage = function (students) {
    let averages= []
    for (let i = 0; i < students.length; i++) {
        const student = students[i]
        if (student.average >= 10) {
            averages.push(student)
        }
    }
    return averages
}

console.log(hasAverage(classA))


