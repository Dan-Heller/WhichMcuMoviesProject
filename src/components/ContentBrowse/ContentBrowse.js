import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import './ContentBrowse.css'
import Title from '../../Models/Title';
import TwoButtonGroup from '../TwoButtonGroup/TwoButtonGroup';



class ContentBrowse extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: '',
      titles: [],
      
      
    }
    this.childRef = React.createRef();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onSearchByChange = async (value) => {
   
      if (this.props.searchByModes[value] !== this.props.searchByMode){
          this.props.ChangeSearchByMode(value); //changes mode in app.js
          let res;
        
          if(this.props.searchByModes[value] == this.props.searchByModes[1]){
      
            res = await fetch('http://localhost:3001/AllCharacters');
         }
         else{
           res = await fetch('http://localhost:3001/AllTitles');
         }
         const data = await res.json();
         const TitlesArray = data;
         this.setState({ titles: TitlesArray });

     
        }
      }
  

   async componentDidMount() {
  try {
    let res;
    if(this.props.searchByMode == this.props.searchByModes[1]){
      
       res = await fetch('http://localhost:3001/AllCharacters');
    }
    else{
      res = await fetch('http://localhost:3001/AllTitles');
    }
    const data = await res.json();
    const TitlesArray = data;
    this.setState({ titles: TitlesArray });
    
   
  } catch (err) {
    console.log(err);
  }
  }

   
  render(){
    
    const filteredTitles = this.state.titles.filter(title =>{
      return title.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    
    return ( 
      <div className='tc br3 pa3 ma2 dib bw2 '>

          

          <div className='SearchBar'>
          <SearchBox  searchChange={this.onSearchChange} />
          </div>
          <div className='SearchByButtons'>
            <TwoButtonGroup Modes={this.props.searchByModes} ButtonChanged={this.onSearchByChange} />
          </div>

          <div className='titlesPresentation'>
          

          <div id="cardsContainer">
          <CardList titlesProp={filteredTitles}   ref={this.childRef}  TitleClicked={this.props.TitleClicked} />
          </div>

          </div>
          
         

  </div>

     
    );
  }

}


export default ContentBrowse;