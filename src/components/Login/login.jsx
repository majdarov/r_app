import React from "react";
import { Field, reduxForm } from 'redux-form';
import { usersApi } from "../../api/api";

const Login = props => {

  const onSubmit = formData => {
    usersApi.login(formData)
      .then((data) => {
        if (data.resultCode !== 0) {
          alert('NO LOGIN');
          return;
        } else {
          console.log(data);
        }
      })

  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const FormLogin = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='login' placeholder='Login...' component='input' />
      </div>
      <div>
        <Field name='password' type='password' placeholder='Password...' component='input' />
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

const LoginReduxForm = reduxForm({form: 'loginForm'})(FormLogin);

export default Login;
