import React, { useReducer } from 'react';
import loginReducer from '../../redux/loginReducer';
import './styles.css';

const Login = () => {
  let [state, dispatch] = useReducer(loginReducer, {
    username: '',
    password: '',
    error: '',
    isLoggedIn: false,
  });

  const usernameHandler = (e) => {
    return dispatch({
      type: 'username',
      payload: {
        username: e.target.value,
      },
    });
  };

  const passwordHandler = (e) => {
    return dispatch({
      type: 'password',
      payload: {
        password: e.target.value,
      },
    });
  };

  const logoutHandler = (e) => {
    return dispatch({ type: 'logout' });
  };
  const loginHandler = (e) => {
    e.preventDefault();

    if (state?.username && state?.password) {
      return dispatch({ type: 'success' });
    } else {
      return dispatch({ type: 'error' });
    }
  };

  return (
    <div className="login-wrapper">
      <form>
        {state?.username === 'admin' && state?.password === 'admin' ? (
          <div>
            <h2>Welcome {state?.username}</h2>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        ) : (
          <div id="login-form">
            <div style={{ color: 'red' }}>{state?.error}</div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              required={true}
              value={state?.username}
              onChange={usernameHandler}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required={true}
              value={state?.password}
              onChange={passwordHandler}
            />

            <button onClick={loginHandler}>Login</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
