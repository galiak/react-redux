import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // to turn the input into a controlled input it needs to get some properties --> formProps
  // redux wires all the input data (name, value) and events (onChange, onBlur etc.) automatically, 
  // but it is my job to hook it up to the input elemnt
  // <input onchange={formProps.input.onChange} value={formProps.input.value} /> 
  // <input {...formProps.input} /> --> <input {...input} /> ==> extracting formProps.input properties (es6)
  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {/* {this.renderError(meta)} */}
      </div>
    );
  }

  onSubmitCallback = formValues => {
    // redux-form hendles event.preventDefault() automatically
    this.props.onSubmit(formValues);
  }

  render() {
    return(
      // handleSubmit is provided by redux-form
      // this.props.handleSubmit(this.onSubmitCallback) --> handleSubmit is called on submit with a reference
      // to any callback we want (onSubmitCallback)
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmitCallback)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
};

const validate = (formValues) => {
 const errors = {};
  if (!formValues.title) {
    errors.title = 'you must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'you must enter a description';
  }

  return errors;
};

export default reduxForm({form: 'streamForm', validate})(StreamForm);
