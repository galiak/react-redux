import './SeasonDispaly.css'; // webpack is going to add the content of this css file into index.html
import React from 'react';

// Geoloaction API https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

const seasonConfig = {
  summer: {
    text: 'it\'s hot',
    iconName: 'sun'
  },
  winter: {
    text: 'it\'s chilly',
    iconName: 'snowflake'
  }
};

// Northen Hemisphere seasons - winter: 0 1 2 9 10 11 summer: 3 4 5 6 7 8
// Southern Hemisphere seasons - winter: 3 4 5 6 7 8 summer: 0 1 2 9 10 11
const getSeason = (lat, month) => {
  console.log(lat, month)
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}


// extract logic as much as possible out of the functional component
const SeasonDispaly = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];
  
  return (
    <div className={`${season} season-display`}>
      <i className={`${iconName} icon-left outline icon huge`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} icon-right outline icon huge`}></i>
    </div>
  );
};

export default SeasonDispaly;


