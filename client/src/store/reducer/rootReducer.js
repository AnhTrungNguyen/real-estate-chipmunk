import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const autoConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn','token']
}

const rootReducer = combineReducers({
    auth: persistReducer(autoConfig,authReducer),
    user:userReducer
})

export default rootReducer