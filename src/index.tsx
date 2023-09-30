import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Nick' },
];

let messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Ola!' },
    { id: 3, message: 'Coma esta?' },
];

// hi

let postData = [
    {id:1 ,message:'Hello it"s my first post', likesCount:15},
    {id:2 ,message:'Hello it"s my second post', likesCount:5},
    {id:3 ,message:'Hello it"s my third post', likesCount:25},
]

ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}  />,
    document.getElementById('root')
);
