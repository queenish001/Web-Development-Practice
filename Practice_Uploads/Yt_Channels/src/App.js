import React from 'react';
import {add, mult, div, sub } from './Calc';
function App(){
    return (
    <ol>
        <li>Addition: {add(4, 3)}</li>
        <li>Subtraction: {sub(4, 3)}</li>
        <li>Multiplication: {mult(4, 3)}</li>
        <li>Divide: {div(10, 3)}</li>
    </ol>
    );
}
export default App;