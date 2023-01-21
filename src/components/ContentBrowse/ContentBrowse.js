import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import './ContentBrowse.css'




class movie {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}


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
    const movie1 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const movie2 = new movie("Avengers",'https://m.media-amazon.com/images/I/81lMrc8bBRL._AC_UY218_.jpg');
    const movie3 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const movie4 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const movie5 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const movie6 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const movie7 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const movie8 = new movie("Thor 3",'https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg');
    const fetchedTitles =  [movie1, movie2, movie3, movie4,movie5,movie6,movie7,movie8];
    this.setState({titles : fetchedTitles })
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
          <CardList titlesProp={filteredTitles}  className='cardslist' ref={this.childRef}  />
          </div>

          </div>
          
         
  
  </div>

     
    );
  }

}


export default ContentBrowse;