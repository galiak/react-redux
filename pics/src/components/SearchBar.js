import React from 'react';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  state = {term: ''};

  // arrow function automatically binds the class's this
  // which is like binding in the constructor
  // or invoke an arrow function obSubmit (like it is in onChange)
  onFormSubmit = event => {
    event.preventDefault(); // the page doesn't refresh on enter
    this.props.onSearchSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={e => this.setState({term: e.target.value})} 
            />
          </div>
        </form>
      </div>
    )
  }
}
// to be used anytime there's a single line of code 
// <input type="text" onChange={event/e => console.log(event/e.target.value)} />

// onInputChange(event) {
//   console.log(event.target.value);
// }
// <input type="text" onChange={this.onInputChange} />

export default SearchBar;