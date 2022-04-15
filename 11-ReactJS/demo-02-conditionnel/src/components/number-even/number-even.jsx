const NumberEven = ({ number }) => {

    if (number === '' || isNaN(number)) {
        return (
            <p>le nombre est erroné !</p>
        );
    }

    const result = (number % 2 === 0) ? 'pair' : 'impair';

    return (
        <p>Le nombre {number} est {result} !</p>
    );

};

export default NumberEven;