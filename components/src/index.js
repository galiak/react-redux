import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <span>Warning...</span>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <Comment 
          author="Alex" 
          time="Today at 4:45PM" 
          content="Nice post" 
          image={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment 
          author="Jane" 
          time="Today at 6:45PM" 
          content="Nice day" 
          image={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment 
          author="Sam" 
          time="Yesterday at 7:45PM" 
          content="Nice photo" 
          image={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
