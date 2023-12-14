import {combineReducers, legacy_createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof  store.getState>

// @ts-ignore
window.store = store