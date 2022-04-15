const Person = (props) => {

    const { name, hobby } = props;

    return (
        <>
            <h3>Hello {name}</h3>
            <p>Votre loisir est {hobby}</p>
        </>
    );

};

Person.defaultProps = {
    name: 'Inconnu'
};

export default Person;