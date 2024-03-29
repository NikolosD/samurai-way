import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {useDispatch} from "react-redux";
import {appReducer} from "redux/app-reducer";



const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk))
export type AppStateType = ReturnType<typeof rootReducer>




export default store
// @ts-ignore
window.store = store