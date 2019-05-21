import React, { Component} from 'react';
import EventCard from './event_card.jsx';

const Listing = (props) => {
  // console.log(props);
  return (
    <div className="listing" >
      {props.events.map((event, index) => {
        return (
          <EventCard
            title={event.displayName}
            city={event.location.city}
            date={event.start.date}
            venue={event.venue.displayName}
            index={index}
            key={event.id}
            select={props.select}
          />
        )
      })}
    </div>
  )
}

export default Listing;
