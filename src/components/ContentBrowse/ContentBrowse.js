import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import './ContentBrowse.css'
import Title from '../../Models/Title';
import TwoButtonGroup from '../TwoButtonGroup/TwoButtonGroup';
import * as TitlesService from '../../Services/TitlesService';
import * as CharactersService from '../../Services/CharactersService';




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
          let data;
        
          if(this.props.searchByModes[value] == this.props.searchByModes[1]){
      
            data = await CharactersService.fetchAllCharacters();
         }
         else{
           data = await TitlesService.fetchAllTitles();
         }
         
         const TitlesArray = data;
         this.setState({ titles: TitlesArray });

     
        }
      }
  

   async componentDidMount() {
  try {
    let data;
    if(this.props.searchByMode == this.props.searchByModes[1]){
      
       data = await CharactersService.fetchAllCharacters();
    }
    else{
      data = await TitlesService.fetchAllTitles();
    }
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
          <CardList titlesProp={filteredTitles}   ref={this.childRef}  TitleClicked={this.props.TitleClicked}  chosenInd={this.props.chosenInd}/>
          </div>

          </div>
          
         

  </div>

     
    );
  }

}


export default ContentBrowse;