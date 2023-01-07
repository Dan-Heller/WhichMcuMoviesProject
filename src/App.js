import 'tachyons/css/tachyons.min.css'
import Logo from './components/Logo/Logo';
import ContentBrowse  from './components/ContentBrowse/ContentBrowse';
import './App.css';
import { Component } from 'react';

class movie {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      
      
    }
  }

  render(){
    const movie1 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const movie2 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const movie3 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const movie4 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const contentList = new  Array(movie1, movie2, movie3, movie4);

      return (
        <div className="App">
          <header className="App-header">
          <Logo />
          </header>
          < ContentBrowse content={contentList}/>
          
          
        </div>
      );
  }
}

export default App;
