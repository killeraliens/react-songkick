import React, { Component } from 'react';
import SearchByName from './search_by_name.jsx';
import Listing from './listing.jsx';
import EventCard from './event_card.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      selectedEvent: {},
    }
  }

  searchByName = (term) => {
    //const url = `https://api.songkick.com/api/3.0/artists/${term}/calendar.json?apikey=${process.env.API_URL}`;
    const idUrl = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${process.env.API_URL}&query=${term}`;
    fetch(idUrl)
    .then((results) => results.json())
    .then((json) => {
      const artistArr = json.resultsPage.results.artist;
      const filtered = artistArr.filter( artist => { return artist.displayName.toLowerCase() === term.toLowerCase() });
      console.log(filtered[0].id);
      searchId(filtered[0].id)
    });
    // const url = `https://api.songkick.com/api/3.0/artists/${this.state.artists[0].displayName}/calendar.json?apikey=${process.env.API_URL}`;
    // fetch(url)
    // .then((results) => results.json())
    // .then((json) => {
    //   console.log(json);
    // });

    // const events = [{title: "Obituary", city: "Phoenix", date: "August 31", id: "eventone"}, {title: "Necrowretch", city: "Chicago", date: "September 16", id: "eventtwo"}]
    // this.setState({
    //   events: events
    // })
  };

  select = (index) => {
    const events = this.state.events
    this.setState({
      selectedEvent: events[index]
    })
  };

  render() {
    return (
      <div>
        <div className="nav-bar">
          <SearchByName search={this.searchByName}/>
        </div>
        <div className="scene-contain">
          <div className="left-scene">
            <EventCard
              title={this.state.selectedEvent.title}
              city={this.state.selectedEvent.city}
              date={this.state.selectedEvent.date}
              id={this.state.selectedEvent.id}
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
