import './index.css';
import state, {addPost} from './redux/state'
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state)
