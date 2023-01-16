import 'tachyons/css/tachyons.min.css'
import Logo from './components/Logo/Logo';
import ContentBrowse  from './components/ContentBrowse/ContentBrowse';
import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor() {
    super()
    this.state = {
      
      
    }
  }

  render(){
    

      return (
        <div className="App">
          <header className="App-header">
            <Logo />
            <h1 className='shadow'>GUIDE</h1>
          </header>
          < ContentBrowse />
          
          
        </div>
      );
  }
}

export default App;
