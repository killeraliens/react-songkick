import React, {Component} from 'react';

class EventShow extends Component {
  render() {
    if (!this.props.title) {
      return null;
    }
    return(
      <div>{`${this.props.date} - ${this.props.title} - ${this.props.city}`}</div>
    )
  }
}

export default EventShow;
