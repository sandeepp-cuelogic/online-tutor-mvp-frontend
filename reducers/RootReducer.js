//import { userInfo } from "./LoginReducer";
import { envInfo } from "./EnvironmentReducer";
import { reducer as reduxFormReducer } from 'redux-form'
import { combineReducers } from "redux-immutable";

const RootReducer = combineReducers({ 
    environment: envInfo,
    form: reduxFormReducer 
});

export default RootReducer;