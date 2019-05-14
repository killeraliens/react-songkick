import React, { Component } from 'react';
import SearchByName from './search_by_name.jsx';
import Listing from './listing.jsx';

class App extends Component {



  render() {
    return (
      <div>
        <div className="nav-bar">
          <SearchByName />
        </div>
        <div className="scene-contain">
          <div className="left-scene">
            {/*<Event />*/}
          </div>
          <div className="right-scene">
            <Listing />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
