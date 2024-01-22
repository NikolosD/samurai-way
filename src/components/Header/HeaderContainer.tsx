import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthDataType, setAuthUserData} from "../../redux/auth-reducer";
import axios from "axios";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                res.data.resultCode === 0 &&
                this.props.setAuthUserData(res.data.data)
            })
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
    setAuthUserData: (authData: AuthDataType) => void
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
