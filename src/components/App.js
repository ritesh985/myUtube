import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideos: null };

  componentDidMount(){
      this.onSearchSubmit('pandas');
  }

  onSearchSubmit = async term => {
    const responses = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyD-OfFlnBbgV1SW5tSKVh2ASYRWJ_Jaehg',
        q: term
      }
    });
    //console.log(responses.data.items);
    this.setState({ videos: responses.data.items, selectedVideos:responses.data.items[0] });
  };

  onVideoSelect = video => {
    //console.log('From the APP',video)
    this.setState({ selectedVideos: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideos} />
              </div>
              <div className="five wide column">
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
