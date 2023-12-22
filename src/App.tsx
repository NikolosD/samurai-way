import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";

import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppProps = {

};


function App(props: AppProps) {
    return (

            <div className="App">
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/profile'} element={<Profile />}/>
                            <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </div>

    );
}
export default App;
