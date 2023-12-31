import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";

import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


type AppProps = {};


const App: React.FC<AppProps> = () => {
    return (

        <div className="App">
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path="/profile" render={() => <Profile/>}/>
                    <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route exact path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </div>

    );
}
export default App;
