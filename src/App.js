import 'tachyons/css/tachyons.min.css'
import Logo from './components/Logo/Logo';
import ContentBrowse  from './components/ContentBrowse/ContentBrowse';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo />
      </header>
      < ContentBrowse />
      
      
    </div>
  );
}

export default App;
