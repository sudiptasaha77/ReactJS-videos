import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC3_Af1OKCMZhT1-MOJQngLMeSBOHqdjuU';

// Create a new component. This component should produce some html

class App extends Component{ //const is ES6 syntax. const assigns final value to a variable
 constructor(props) {
     super(props);
     this.state = {videos: [], selectedVideo: null};
     this.videoSearch('Surfboards');

 }

 videoSearch(term){
     YTSearch(
         {key: API_KEY, term: term},
         (data) => this.setState({videos: data, selectedVideo: data[0]})
     );
 }


  render() {

     const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 700);
      return (
          <div>
          <SearchBar onChangeSelect = {videoSearch}/>
          <VideoDetail videodetail ={this.state.selectedVideo}/>
          <VideoList
             onVideoSelect = {(sVideo) => this.setState({selectedVideo: sVideo})}
          vd={this.state.videos}/>
      </div>);
  }
}

//Take this component's generated html and put it in the DOM(on the page)
ReactDom.render(<App/>, document.querySelector('.container'));

