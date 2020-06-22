import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './AuthReducer';
import SiteMessageReducer from './SiteMessageReducer';
import OrderReducer from './OrderReducer';


let reducers=combineReducers({
    form: formReducer,
    auth:AuthReducer,
    orders:OrderReducer,
    messages:SiteMessageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers( applyMiddleware(thunkMiddleware)))

window.store=store;
export default store