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
    /*const movie1 = new movie("Doctor Strange in the Multiverse of Madness",'https://m.media-amazon.com/images/I/913v0sAkiyL._AC_UY218_.jpg');
    const movie2 = new movie("Avengers",'https://m.media-amazon.com/images/I/81lMrc8bBRL._AC_UY218_.jpg');
    const movie3 = new movie("Captain America: The First Avenger",'https://m.media-amazon.com/images/I/91LmsuoBOIL._AC_UY218_.jpg');
    const movie4 = new movie("Iron Man",'https://m.media-amazon.com/images/I/91qvAndeVYL._AC_UY218_.jpg');
    const movie5 = new movie("The Incredible Hulk",'https://m.media-amazon.com/images/I/91wFHajfFpL._AC_UY218_.jpg');
    const movie6 = new movie("Iron Man 2",'https://m.media-amazon.com/images/I/91SdhGAiBKL._AC_UY218_.jpg');
    const movie7 = new movie("Captain America : The Winter Soldier",'https://m.media-amazon.com/images/I/91cW92vUDoL._AC_UY218_.jpg');
    const movie8 = new movie("Thor : The Dark World",'https://m.media-amazon.com/images/I/91RsJltFGLL._AC_UY218_.jpg');
    const movie9 = new movie("Thor : Ragnarok",'https://m.media-amazon.com/images/I/81l1Kaw8aKL._AC_UY218_.jpg');
    const fetchedTitles =  [movie1, movie2, movie3, movie4,movie5,movie6,movie7,movie8, movie9];*/
    fetch('http://localhost:3001/AllTitles')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ titles: data });
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
          <CardList titlesProp={filteredTitles}   ref={this.childRef}  />
          </div>

          </div>
          
         

  </div>

     
    );
  }

}


export default ContentBrowse;