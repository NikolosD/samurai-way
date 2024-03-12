import {Dispatch} from "redux";
import {authApi, LoginData} from "../api/api";

export type AuthDataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState: AuthDataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
export const authReducer = (state: AuthDataType = initialState, action: AuthReducerType) => {
    switch (action.type) {
        case 'SET-USER-DATA':{
            return {...state,...action.data, isAuth: true}
        }
        case 'SET-IS-LOGGED-IN':{
            return{
                ...state,
                isAuth: action.isLoggedIn
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (data: AuthDataType) => {
    return {type: 'SET-USER-DATA', data} as const
}

export const setIsLoggedIn = (isLoggedIn: boolean) =>{
    return {type:'SET-IS-LOGGED-IN' as const, isLoggedIn}
}



type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
type SetIsLoggedIn = ReturnType<typeof setIsLoggedIn>

export const getAuthUserDataTC = () => (dispatch: Dispatch) =>{

    authApi.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedIn(true));
            } else {
                dispatch(setIsLoggedIn(false));

            }
        });
}


export const loginTC = (data: LoginData) => (dispatch: Dispatch) => {
    authApi
        .login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedIn(true))
            }
        })
        .catch((error) => {
        });
};

export const logoutTC = () => (dispatch: Dispatch) =>{
    authApi.logout().then((res)=> {
        dispatch(setIsLoggedIn(false))
    })
}


export type AuthReducerType = SetAuthUserDataType | SetIsLoggedIn


