import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";



const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
})

const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>


export default store
// @ts-ignore
window.store = store