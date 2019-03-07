import React from 'react';
import userResources from './userResource';

const ResourceList = ({resource}) => {

  const resources = userResources(resource);

  return (
    <ul>
      {resources.map(record => <li key={record.id}>{record.title}</li>)}
    </ul>
  );
  // const [resources, setResources] = useState([]);
  
  // // we can't pass to useEffect async functions or functions that return a promise
  // // but we can define an async function in it and invoke it immediately
  // useEffect(
  //   () => {
  //     (async resource => {
  //       const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  //       setResources(response.data);
  //     })(resource);
  //   }, [resource] // an arrow function that defines an immediatly invoked async finction
  // );

  // const fetchResource = async resource => {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${resource}`
  //   );
  //   setResources(response.data);
  // };

  // useEffect(() => {
  //     fetchResource(resource);
  //   }, 
  //   [resource] // ==> updated props (instead  of if (prevProps.resource !== this.props.resource) {})
  // );

  // useEffect(() => {... ... ...}) 
  // useEffect(() => {... ... ...}) --> will always be called if there's no array
  // useEffect(() => {... ... ...}, []) 
  // useEffect(() => {... ... ...}, []) --> will run only one time
  // useEffect(() => {... ... ...}, [1]) 
  // useEffect(() => {... ... ...}, [1]) --> will run only one time
  // useEffect(() => {... ... ...}, ['hi']) 
  // useEffect(() => {... ... ...}, [1]) --> will run twice because the values are different

  // useEffect(() => {... ... ...}, [{color: 'red'}]) 
  // useEffect(() => {... ... ...}, [{color: 'red'}]) --> will run twice because the values are different
  // useEffect(() => {... ... ...}, [10, 10]) 
  // useEffect(() => {... ... ...}, [10, 10]) --> will run only one time
   // useEffect(() => {... ... ...}, [10, 10]) 
  // useEffect(() => {... ... ...}, [10]) --> will run twice because the values are different

};

export default ResourceList;

// class ResourceList extends React.Component {
//   state = {resources: []};

//   async componentDidMount() {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//     this.setState({resources: response.data});
//   }

//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//       this.setState({resources: response.data});
//     }
//   }

//   render() {
//     return <div>{this.state.resources.length}</div>
//   }
// }

// export default ResourceList;