import React, { Component} from 'react';
import EventCard from './event_card.jsx';
import NoResults from './no_results.jsx';

const Listing = (props) => {
  if (!props.events) {
    return <NoResults />;
  }
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
