import 'tachyons/css/tachyons.min.css'
import Logo from './components/Logo/Logo';
import ContentBrowse  from './components/ContentBrowse/ContentBrowse';
import './App.css';
import { Component } from 'react';
import WatchOrder from './components/WatchOrder/WatchOrder';


const SearchByModes = ["By Title", "By Character"];

class App extends Component {

  constructor() {
    super()
    this.state = {
      chosenTitleInd: '',
      searchByMode: ''
    }
   
  }

  ChangeSearchByMode = (value) => {
    
    this.setState({ searchByMode: SearchByModes[value] });
  }

  componentDidMount(){
    this.setState({ searchByMode: SearchByModes[0]});
  }

  TitleClicked = (TitleInd) => {
    this.setState({ chosenTitleInd: TitleInd })
    console.log("TitleClicked");
  }

  render(){
    

      return (
        <div className="App">
          <header className="App-header">
            <Logo />
            <h1 className='shadow'>GUIDE</h1>
          </header>
          < ContentBrowse searchByModes={SearchByModes} TitleClicked={this.TitleClicked} searchByMode={this.state.searchByMode} ChangeSearchByMode={this.ChangeSearchByMode} chosenInd={this.state.chosenTitleInd}/>
          < WatchOrder  chosenInd={this.state.chosenTitleInd} TitleClicked={this.TitleClicked} searchByModes={SearchByModes} searchByMode={this.state.searchByMode}/>
          
        </div>
      );
  }
}


export default App;
