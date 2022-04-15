import './App.css';
import MainHeader from './containers/main-header/main-header';
import MainFooter from './containers/main-footer/main-footer';
import TodoApp from './containers/todo-app/todo-app';

function App() {
  return (
    <div className='App'>
      <MainHeader />
      <main>
        <TodoApp />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
