import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { login } from "../../redux/auth_reduser";
import { required } from "../../utils/validators/validators";
import FormElement from "../common/FormAddMessage/FormElement";

const Login = props => {

  const onSubmit = formData => {
    props.login(formData);
  }


  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }

  return (
      <>
        <div>
          <h1>LOGIN</h1>
          <LoginReduxForm onSubmit={onSubmit} />
        </div>
      </>
  )

}

const FormLogin = props => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='login' autoComplete='username'
          placeholder='Login...' component={FormElement} elType='input' validate={[required]} />
      </div>
      <div>
        <Field name='password' type='password' autoComplete='current-password'
          placeholder='Password...' component={FormElement} elType='input' validate={[required]} />
      </div>
      <div>
        <Field name='rememberMe' component={FormElement} elType='checkbox' />remember me
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'formLogin' })(FormLogin);

const mapStateToProps = state => {

  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { login })(Login);
