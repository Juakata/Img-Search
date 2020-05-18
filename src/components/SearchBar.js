import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label> Image Search </label>
            <input
              name="term"
              type="text"
              onChange={this.handleChange}
              value={term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
