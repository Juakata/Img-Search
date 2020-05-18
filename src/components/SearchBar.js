import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { onSearchBarSubmit } = this.props;
    const { term } = this.state;
    onSearchBarSubmit(term);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment" style={{ margin: '15px' }}>
        <form className="ui form" onSubmit={this.handleSubmit}>
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
