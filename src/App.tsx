import React from 'react';
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";


function App() {
    return (
        <div className="App">
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                {/*<Profile/>*/}
                    <Dialogs/>
                </div>

            </div>
        </div>

    );
}

export default App;
