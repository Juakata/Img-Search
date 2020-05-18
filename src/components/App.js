import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = { images: [], error: '' }
  onSearchBarSubmit = term => {
    unsplash.get('/search/photos', {
      params: { query: term },
    })
    .then(response => this.setState({ images: response.data.results }))
    .catch(error => this.setState({ error }));
  }

  render() {
    const { images, error } = this.state;
    return (
      <div className="ui container">
        <div>{ error }</div>
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
        <ImageList images={images} />
      </div>
    );
  }
}

export default App;
