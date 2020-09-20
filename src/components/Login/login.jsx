import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { usersApi } from "../../api/api";

const Login = props => {

  const [loginOk, setLoginOk] = useState(false);

  const onSubmit = formData => {
    usersApi.login(formData)
      .then((data) => {
        console.log(data)
        if (data.resultCode !== 0) {
          alert('LOGIN INCORRECT!');
          return;
        } else {
          setLoginOk(true);
        }
      })
  }

  return (
    <>
      {
        loginOk ? <Redirect to={'/profile'} /> :
          <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
          </div>
      }
    </>
  )
}

const FormLogin = props => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='login' autoComplete='username' placeholder='Login...' component='input' />
      </div>
      <div>
        <Field name='password' type='password' autoComplete='current-password' placeholder='Password...' component='input' />
      </div>
      <div>
        <Field name='rememberMe' component='input' type='checkbox' />remember me
        </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'formLogin' })(FormLogin);

export default Login;
