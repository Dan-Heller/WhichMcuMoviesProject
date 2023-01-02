import 'tachyons/css/tachyons.min.css'
import Logo from './components/Logo/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo />
      </header>
      <input className='f4 pa2 w-30 right' type='text' ></input>
      
    </div>
  );
}

export default App;
