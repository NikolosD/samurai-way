import {AppStateType} from "redux/redux-store";

export const selectIsLoggedIn = (state: AppStateType) => state.auth.isAuth;
