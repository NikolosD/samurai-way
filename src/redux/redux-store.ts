import {combineReducers, legacy_createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {StoreType} from "./store";


const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
})

export const store: StoreType = legacy_createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>



// @ts-ignore
window.store = store