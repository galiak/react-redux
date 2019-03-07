import {useState, useEffect} from 'react';
import axios from 'axios';

const userResources = resource => {
  const [resources, setResources] = useState([]);
  
  // we can't pass to useEffect async functions or functions that return a promise
  // but we can define an async function in it and invoke it immediately
  useEffect(
    () => {
      (async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
      })(resource);
    }, [resource] // an arrow function that defines an immediatly invoked async finction
  );

  return resources;
}

export default userResources;