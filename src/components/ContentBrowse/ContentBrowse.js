import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import './ContentBrowse.css'
import Title from '../../Models/Title';


class ContentBrowse extends Component {
  constructor() {
    super()
    this.state = {
      searchfield: '',
      titles: []
    }
    this.childRef = React.createRef();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }


  componentDidMount() {
    fetch('http://localhost:3001/AllTitles')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      //const TitlesArray = data;
      this.setState({ titles: TitlesArray });
    })
    .catch(err => {
      console.log(err);
    });
    /*this.setState({titles : fetchedTitles })*/
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