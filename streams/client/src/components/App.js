import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'; //custom history

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            {/* fix for "Invalid prop `component` of type `object` supplied to `Route`, expected `function`." */}
            <Route path="/streams/new" exact component={props => <StreamCreate {...props} />} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
    );
};

export default App;

// simple example of react-router
// const PageOne = () => {
//   return (
//     <div>
//       PageOne
//       {/* using anchor tags in react is a bad appropach. Use Link instead */}
//       <Link to="/pagetwo">navigate to pagetwo</Link>
//     </div>
//   );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       PageTwo
//       {/* using anchor tags in react is a bad appropach. Use Link instead */}
//       <Link to="/">navigate to pageone</Link>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <div>
//           <Route path="/" exact component={PageOne} />
//           <Route path="/PageTwo" exact component={PageTwo} />
//         </div>
//       </BrowserRouter>
//     </div>
//     );
// };

// export default App;

