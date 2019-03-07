import  {useState, useEffect} from 'react';

const useLocation = () => {
  // initializing state
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      error => setErrorMessage(error.message)
    );
  }, []); // run this finction only once

  // return {lat: lat, erroeMessage: errorMessage};
  return [lat, errorMessage]; // community convention
};

export default useLocation;