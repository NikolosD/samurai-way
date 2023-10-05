import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, AppState, updateNewPostText,} from './redux/state'


export let rerenderEntireTree = (state: AppState) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={ updateNewPostText}/>,
        document.getElementById('root')
    );
}
