import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "components/Login/auth.selectors";


type AppProps = {};


const App: React.FC<AppProps> = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className="App">
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {!isLoggedIn ? <Redirect to="/login" /> :
                        <>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route exact path="/users" render={() => <UsersContainer/>}/>
                        </>
                    }
                    <Route exact path="/login" render={() => <Login/>}/>
                </div>
            </div>
        </div>

    );
}
export default App;
