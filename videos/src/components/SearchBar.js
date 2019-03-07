import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  }

  // this is a callback passed to some child element (to make sure it's wired to the right `this`)
  onFormSubmit = event => {
    event.preventDefault();

    // TODO: make sure we call callbacl from parent component
    // tell the app the user submitted the form to initiate a video search
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit} >
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={this.onInputChange} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;