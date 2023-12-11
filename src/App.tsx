import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppState} from "./redux/state";


type AppProps = {
    state: AppState
    newPostText:string
    dispatch: (action:any)=> void
};


function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/profile'} element={<Profile state={props.state} dispatch={props.dispatch} newPostText={props.newPostText}/>}/>
                            <Route path={'/dialogs'} element={<Dialogs state={props.state}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
