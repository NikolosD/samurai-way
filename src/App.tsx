import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";


function App() {
    return (
        <div className="App">
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Profile/>
            </div>
        </div>

    );
}

export default App;
