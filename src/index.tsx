import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from "./redux/redux-store";
import store1, { AppState } from './redux/store';
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state: AppState) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store1} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store1.getState());

store.subscribe(() => {
    let state = store1.getState();
    rerenderEntireTree(state);
});
