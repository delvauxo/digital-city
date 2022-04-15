import './App.css';
import NumberEven from './components/number-even/number-even';
import Person from './components/person/person';

function App() {
  return (
    <div className="App">
      <h1>Demo 02 - Conditionnel</h1>
      <NumberEven number={42} />
      <Person name='Olivier' hobby='Football' />
    </div>
  );
}

export default App;
