import React, { Component} from 'react';

class SearchByName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    })
  };

  handleSubmit = (event) => {
    console.log(`searching.. ${this.state.term}`);
    this.props.search(this.state.term);
    event.preventDefault();
  };

  render() {
    return (
    <form className="search-form" onSubmit={this.handleSubmit}>
      <input value={this.state.term} className="form-control search-input" onChange={this.handleChange} ></input>
    </form>
    )
  }
}

export default SearchByName;
