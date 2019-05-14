import React, { Component} from 'react';

class SearchByName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  updateValue = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  render() {
    return (
      <div className="search-input-contain">
        <input value={this.state.term} className="form-control search-input" onChange={this.updateValue}></input>
      </div>
    )
  }
}

export default SearchByName;
