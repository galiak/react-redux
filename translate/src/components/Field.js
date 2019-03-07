import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = {
      'english': 'Name',
      'dutch': 'Naam'
    }; 

    return(
      <div className="ui field">
        <label>{text[this.context.language]}</label>
        <input />
      </div>
    );
  }
}

export default Field;