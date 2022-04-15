import './App.css';
import Welcome from './components/welcome/welcome';
import WelcomeLambda from './components/welcome/welcome-lambda';

function App() {
  return (
    <div className="App">
      <h1>Salut BX !</h1>
      <Welcome
        firstname="Olivier"
        lastname="Delvaux"
        number={42} />
      <WelcomeLambda
        firstname="Olivier"
        lastname="Delvaux" />
    </div>
  );
}

export default App;
