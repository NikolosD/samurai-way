import {Dispatch} from "redux";
import {authApi} from "api/api";
import {setIsLoggedIn} from "redux/auth-reducer";

const initialState = {

    isInitialized: false,
};
export const appReducer = (state = initialState, action: AppActionTypes_) => {
    switch (action.type) {
        case 'SET-IS-INITIALIZED':
            return {
                ...state,
                isInitialized: action.payload.isInitialized
            };
        default:
            return state;
    }
};


type AppActionTypes_ = SetIsInitialized

export const setIsInitialized = (isInitialized: boolean) => ({
    type: 'SET-IS-INITIALIZED' as const,
    payload: {isInitialized}
});

type SetIsInitialized = ReturnType<typeof setIsInitialized>

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authApi.me().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedIn(true));
        } else {
        }
        dispatch(setIsInitialized(true));
    });
};
