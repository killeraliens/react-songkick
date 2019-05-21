import React, {Component} from 'react';

class EventShow extends Component {

  render() {
    if (Object.entries(this.props.selectedEvent).length === 0) {
      return null;
    }
    let event = this.props.selectedEvent;
    return(
      <div>{`${event.start.date} - ${event.displayName} - ${event.location.city}`}</div>
    )
  }
}

export default EventShow;
