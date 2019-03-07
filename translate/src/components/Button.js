import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderButton(color) {
    const text = {
      'english': 'submit',
      'dutch': 'vorgen'
    }; 
    
    return(
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>     
          {/* this child component is a function!! */}
          {/* the Consumer component will invoke it automatically with the value that is inside the context pipe */}         
          {({language}) => text[language]}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return(
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

// Button.contextType= LanguageContext (outside the class) <==> static contextType = LanguageContext (inside the class)

export default Button;