const StudentTable = ({ students }) => {


    const StudentTableHead = () => (
        <thead>
            <tr>
                <th>LastName</th>
                <th>Result</th>
            </tr>
        </thead>
    );

    const StudentTableBody = ({ students }) => {

        const studentsJSX = students.map(
            student => <StudentTableRow key={student.id} {...student} />
        );

        return (
            < tbody >
                {studentsJSX}
            </tbody >
        );
    };

    const StudentTableRow = ({ firstname, lastname, result }) => {
        return (
            <tr>
                <td>{firstname} {lastname}</td>
                <td>{result !== null ? result : '/'}</td>
            </tr>
        );
    };

    return (
        <>
            <h2>Students list</h2>
            <table>
                <StudentTableHead />
                <StudentTableBody students={students} />
            </table>
        </>
    );

};

export default StudentTable;