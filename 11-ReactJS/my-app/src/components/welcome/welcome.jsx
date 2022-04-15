import PropTypes from 'prop-types';
import style from './welcome.module.scss';

const Welcome = (props) => {
    const { firstname, lastname, number } = props;
    return (
        <>
            <p className={style.name}>Bonjour {firstname} {lastname}.</p>
            <p className={style.number}>Votre numéro est {number} !</p>
        </>
    );
};

Welcome.defaultProps = {
    number: 13
};

Welcome.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string,
    number: PropTypes.number
};

export default Welcome;