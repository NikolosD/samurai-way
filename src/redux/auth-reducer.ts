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
export const authReducer = (state: AuthDataType = initialState, action: SetAuthUserDataType) => {
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

export type AuthReducerType = SetAuthUserDataType

