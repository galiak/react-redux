import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SeasonDispaly from './SeasonDispaly';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDispaly lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return (
    <div className="border">
      {content}
    </div>
  );
}

// class App extends React.Component {
  
//   state = {lat: null, erroeMessage: ''}

//   componentDidMount() {
//     console.log('component did mount');
//     window.navigator.geolocation.getCurrentPosition(
//       // setState is a function from React.Component
//       position => this.setState({lat: position.coords.latitude, erroeMessage: ''}),
//       error => this.setState({erroeMessage: error.message})
//     );
//   }

//   componentDidUpdate() {
//     console.log('component did update');
//   }

//   componentWillUnount() {
//     console.log('component did unmount');
//   }

//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage}</div>;
//     }

//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDispaly lat={this.state.lat} />;
//     }

//     return <Spinner message="Please accept location request" />;
//   }

//   render() {
//     return (
//       <div className="border">
//         {this.renderContent()}
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);