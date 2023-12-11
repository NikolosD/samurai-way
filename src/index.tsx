import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {AppState} from "./redux/state";


let rerenderEntireTree = (state: AppState) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} newPostText={state.profilePage.newPostText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)