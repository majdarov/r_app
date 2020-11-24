import React from "react";
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import FormElement from "./FormElement";


const maxLength10 = maxLengthCreator(10);

const FormAddMessage = props => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='message' placeholder={props.placeholder || 'add message...'} component={FormElement}
          className={props.txtClass} validate={[required, maxLength10]} elType='textarea' />
      </div>
      <div>
        <button type='submit' disabled={props.disabled || false}>Add Message</button>
      </div>
    </form>
  )
}

export const AddMessageReduxForm = reduxForm({ form: 'formAddMessage' })(FormAddMessage);
