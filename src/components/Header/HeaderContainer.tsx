import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthDataType, getAuthUserDataTC, logoutTC, setAuthUserData} from "../../redux/auth-reducer";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logoutTC}/>
        );

    }
}

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
    logoutTC: () => void
}

export default connect(mapStateToProps, {getAuthUserDataTC, logoutTC})(HeaderContainer);
