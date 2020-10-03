import React, { FC } from 'react';
import { useLogin, LoginValues } from '../hooks/SessionHooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login: FC = () => {
  const { login } = useLogin();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const onSubmit = (values: LoginValues) => login(values);

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
        ></input>

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        ></input>

        <button type="submit">LOGIN</button>
      </form>
    </>
  );
};

export default Login;
