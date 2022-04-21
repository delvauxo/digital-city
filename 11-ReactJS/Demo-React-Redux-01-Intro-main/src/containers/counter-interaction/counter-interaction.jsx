import ButtonAction from '../../components/button-action/button-action';
import PropTypes from 'prop-types';
import { counterDecrement, counterIncrement } from '../../store/actions/counter-actions';
import { useDispatch } from 'react-redux';

const CounterInteraction = ({ step }) => {

    const dispatch = useDispatch();

    const handleIncrement = () => {
        const action = counterIncrement(step);
        dispatch(action);

    };

    const handleDecrement = () => {
        const action = counterDecrement(step);
        dispatch(action);
    };

    return (
        <div>
            <ButtonAction onClick={handleIncrement} direction='up' step={step} />
            <ButtonAction onClick={handleDecrement} direction='down' step={step} />
        </div>
    );
};



CounterInteraction.propTypes = {
    step: PropTypes.number
};

CounterInteraction.defaultProps = {
    step: 1
};

export default CounterInteraction;