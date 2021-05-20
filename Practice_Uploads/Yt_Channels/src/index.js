import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import  './index.css';
import Sdata from './Sdata';

ReactDOM.render(
    <>
    <h1 className = "headname"> Top Programming YouTube Channels</h1>
    {Sdata.map((val, index) => {
        return (
            <Card
            imgsrc = {val.imgsrc}
            sname = {val.sname}
            link = {val.link}
            />
        );
    })}
        
    </>,
    document.getElementById('root')
);

// ReactDOM.render(React.createElement("h1", null, "Written with React Normally purely"), document.getElementById('root'));


// var h1 = document.createElement('h1');
// h1.innerHTML = "written with purely javascript";
// document.getElementById('root').appendChild(h1);
