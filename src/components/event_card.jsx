import React, { Component } from 'react';

class EventCard extends Component {

  handleClick = () => {
    this.props.select(this.props.index);
  }

  render() {
    if (!this.props.title) {
      return null;
    }
    return (
      <div className="event-card" onClick={this.handleClick}>
       {`${this.props.date} - ${this.props.title} - ${this.props.city}`}
      </div>
    )
  }
}

export default EventCard;
