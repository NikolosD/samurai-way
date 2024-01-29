import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthDataType, getAuthUserDataTC, setAuthUserData} from "../../redux/auth-reducer";
import axios from "axios";
import {authApi, UserApi} from "../../api/api";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
       this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        );

    }
};

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null,
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

type MapDispatchToPropsType = {
    getAuthUserDataTC: () => void
}

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer);
