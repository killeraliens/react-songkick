import React, {Component} from 'react';

class EventShow extends Component {

  render() {
    if (Object.entries(this.props.selectedEvent).length === 0) {
      return null;
    }
    let event = this.props.selectedEvent;
    return(
      <div className={"displayed-event"}>
        <div className="event-text">
          <p>{`${event.start.date}`}</p>
          <p>{`${event.displayName}`}</p>
          <p>{`${event.location.city}`}</p>
          <a href={`${event.uri}`} target="_blank">tickets</a>
        </div>
      </div>
    )
  }
}

export default EventShow;
