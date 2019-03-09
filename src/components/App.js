import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";


class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 2ac0dc3e6cdcb6ce21dd289b4d9ca07276e730ee72f3c499c666f43143cddb49'
      }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style = {{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
