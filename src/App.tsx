import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRootStateType} from "./redux/redux-store";
import {ActionsType,  StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppProps = {
    store: AppRootStateType
    dispatch: (action:ActionsType) => void
};


function App(props: AppProps) {
    return (

            <div className="App">
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/profile'} element={<Profile store={props.store} dispatch={props.dispatch}/>}/>
                            <Route path={'/dialogs'} element={<DialogsContainer store={props.store} dispatch={props.dispatch}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>

    );
}
export default App;
