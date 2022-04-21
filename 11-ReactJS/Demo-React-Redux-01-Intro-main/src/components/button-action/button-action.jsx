import PropTypes from 'prop-types';

const ButtonAction = ({ step, direction, onClick }) => {

    return (
        <button onClick={onClick}>
            {direction === 'down' ? <>&#9660;</> : <>&#9650;</>}
            {' '}
            {step}
        </button>
    );
};

ButtonAction.propTypes = {
    step: PropTypes.number.isRequired,
    direction: PropTypes.oneOf(['up', 'down']),
    onClick: PropTypes.func
};

ButtonAction.defaultProps = {
    direction: 'up',
    onClick: () => { }  // NOOP
};

export default ButtonAction;