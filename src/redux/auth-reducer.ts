import {Dispatch} from "redux";
import {authApi} from "../api/api";

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
        default:
            return state
    }
}

export const setAuthUserData = (data: AuthDataType) => {
    return {type: 'SET-USER-DATA', data} as const
}

type SetAuthUserDataType = ReturnType<typeof setAuthUserData>

export const getAuthUserDataTC = () => (dispatch: Dispatch) =>{

    authApi.me()
        .then(res => {
            res.data.resultCode === 0 &&
           dispatch(setAuthUserData(res.data.data))
        })
}

export type AuthReducerType = SetAuthUserDataType


