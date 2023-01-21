import { types } from './types';

function loginReducer(state, action) {
  switch (action.type) {
    case types.username: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.password: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.success: {
      return {
        ...state,
        isLoggedIn: true,
        error: '',
      };
    }
    case types.error: {
      return {
        ...state,
        isLoggedIn: false,
        error: 'Invalid username or password',
      };
    }
    case types.logout: {
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: '',
        error: '',
      };
    }
  }
}

export default loginReducer;
