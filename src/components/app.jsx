import React, { Component } from 'react';
import SearchByName from './search_by_name.jsx';
import Listing from './listing.jsx';
import EventCard from './event_card.jsx';
import EventShow from './event_show.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      selectedEvent: {}
    }
  }

  searchId = (id) => {
    const url = `https://api.songkick.com/api/3.0/artists/${id}/calendar.json?apikey=${process.env.API_URL}`;
    fetch(url)
    .then(results => results.json())
    .then(json => {
      //console.log(json.resultsPage.results.event);
      const events = json.resultsPage.results.event;
      this.setState({
        events: events
      }, function() {
        console.log(this.state.events);
      });
    });
  };

  searchByName = (term) => {
    const idUrl = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${process.env.API_URL}&query=${term}`;
    if (term !== "") {
      fetch(idUrl)
      .then((results) => {
        return results.json()
      })
      .then((json) => {
        const artistArr = json.resultsPage.results.artist;
        const filtered = artistArr.filter( artist => { return artist.displayName.toLowerCase() === term.toLowerCase() });
        this.searchId(filtered[0].id);
      });
    } else {
      console.log("no results!");
    }
  };



  select = (index) => {
    const events = this.state.events;
    this.setState({
      selectedEvent: events[index]
    });
  };

  render() {
    //console.log(this.state.events);
    return (
      <div>
        <div className="nav-bar">
          <SearchByName search={this.searchByName}/>
        </div>
        <div className="scene-contain">
          <div className="left-scene">
            <EventShow
              selectedEvent={this.state.selectedEvent}
            />
          </div>
          <div className="right-scene">
            <Listing events={this.state.events} select={this.select} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
