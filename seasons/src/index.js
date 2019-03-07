import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDispaly from './SeasonDispaly';
import Spinner from './Spinner';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     error => console.log(error)
//   );
//   return <div>latitude: </div>
// };

class App extends React.Component {
  
  // one time setup
  // constructor(props) {
  //   super(props);
    
  //   // initializing state
  //   this.state = {
  //     lat: null, // we don't know what the latitude is just yet
  //     erroeMessage: ''
  //   }
  // }

  // condenced "constructor" that runs through Babel
  state = {lat: null, erroeMessage: ''}

  // data loading
  componentDidMount() {
    console.log('component did mount');
    window.navigator.geolocation.getCurrentPosition(
      // setState is a function from React.Component
      position => this.setState({lat: position.coords.latitude, erroeMessage: ''}),
      error => this.setState({erroeMessage: error.message})
    );
  }

  // data loading after changes to propsqstate
  componentDidUpdate() {
    console.log('component did update');
  }

  // cleanup
  componentWillUnount() {
    console.log('component did unmount');
  }

  renderContent() {
    return (
      <div>
        {this.state.lat ? <SeasonDispaly lat={this.state.lat} /> : <div>error: {this.state.erroeMessage}</div>}
        {!this.state.lat && !this.state.erroeMessage ? <Spinner message="Please accept location request" /> : ''}
      </div>
    );
  }

  // always define a render method
  // return JSX (and nothing else)
  // avoid multiple return statements (use helper methods instead)
  render() {
    return (
      <div className="border">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);