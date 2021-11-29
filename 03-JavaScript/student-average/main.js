let students = [
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

for (let i = 0; i < students.length; i++) {
    if (students[i].average < 10) {
        console.log(students[i].name + " n'a pas la moyenne. - " + students[i].average + '/20')
    } else {
        console.log(students[i].name + " a la moyenne. - " + students[i].average + '/20')
    }
}