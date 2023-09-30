import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

type AppProps = {
    dialogsData: Array<{ id: number; name: string }>;
    messagesData: Array<{ id: number; message: string }>;
    postData: Array<{id:number ,message:string, likesCount:number}>;
};


function App(props:AppProps) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                        <Route path={'/profile'} element={<Profile postData={props.postData} />}/>
                        <Route path={'/dialogs'} element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                        </Routes>

                    </div>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
