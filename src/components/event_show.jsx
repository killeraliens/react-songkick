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
          <p>{`${event.displayName} - ${event.location.city}`}</p>
        </div>
      </div>
    )
  }
}

export default EventShow;
