import { useSelector } from 'react-redux';

const CounterDisplay = () => {

    const counter = useSelector(state => state.counter);

    return (
        <div>
            <p>La valeur du compteur est de {counter.count}</p>
            <small>{counter.message}</small>
        </div>
    );
};

export default CounterDisplay;