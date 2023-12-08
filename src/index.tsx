import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {AppState} from "./redux/state";


let rerenderEntireTree = (state: AppState) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)} newPostText={state.profilePage.newPostText}
             updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)