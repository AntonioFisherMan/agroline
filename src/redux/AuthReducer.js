



import { testAPI } from "../api/api";
import {returnErrors} from './SiteMessageReducer'

  const USER_LOADING = "USER_LOADING";
  const USER_LOADED = "USER_LOADED";
  const AUTH_ERROR = "AUTH_ERROR";
  const LOGIN_SUCCESS = "LOGIN_SUCCESS";
  const LOGIN_FAIL = "LOGIN_FAIL";
  const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
  const REGISTER_SUCCESS = "REGISTER_SUCCESS";
  const REGISTER_FAIL = "REGISTER_FAIL";
  

  
  const initialState = {
    token: sessionStorage.getItem("token") || null,
    isAuth: sessionStorage.getItem("isAuth") || false,
    isLoading: false
  };
  
  const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOADING:
        return { ...state, isLoading: true };
      case USER_LOADED:
        sessionStorage.setItem("token", action.payload.token);
        sessionStorage.setItem("isAuth", true);
        return{...state,isAuth:true,token:action.payload.token,user:action.payload.user}
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        sessionStorage.setItem("token", action.payload.token);
        sessionStorage.setItem("isAuth", true);
        return{...state,isAuth:true,token:action.payload.token}

      case AUTH_ERROR:
      case LOGIN_FAIL:
      case REGISTER_FAIL:
      case LOGOUT_SUCCESS:
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("isAuth",false);
        return {
          ...state,
          isAuth: false,
          isLoading: false,
          token: null
        };
  
      default:
        return state;
    }
  };
  
  export const userLoad = (payload) => ({type: USER_LOADED,payload});
  

  export const login = (name, password, interval) => async (dispatch) => {
    dispatch({ type: USER_LOADING });
    testAPI.login(name, password, interval).then((res) => {
        dispatch(userLoad(res.data));
        dispatch({ type: LOGIN_SUCCESS});
      })
      .catch((err) => {
        if(err.response){
          dispatch(returnErrors(err.response.data.message,err.response.status,"LOGIN_FAIL"));
          dispatch({ type: LOGIN_FAIL });
        }
      });
  };
  
  export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS });
  };

  
  export default AuthReducer;
  