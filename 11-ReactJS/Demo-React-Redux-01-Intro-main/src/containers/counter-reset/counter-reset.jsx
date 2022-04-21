import { useDispatch, useSelector } from 'react-redux';
import { counterReset } from '../../store/actions/counter-actions';

const CounterReset = () => {

    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(counterReset());
    };

    return (
        <div>
            <button onClick={handleReset}
                disabled={counter.count === 0}>Remise à Zero du compteur</button>
        </div>
    );
};

export default CounterReset;