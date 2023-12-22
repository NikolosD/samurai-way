import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";



const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
})

const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>


export default store
// @ts-ignore
window.store = store