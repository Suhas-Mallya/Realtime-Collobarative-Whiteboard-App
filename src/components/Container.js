import React from 'react';
import Toolbar from './Toolbar';
import Board from './Board';
import './Container.css'

export default function Container() {
    return (
        <div className="container">
            <Toolbar/>
            <Board/>
        </div>
    )
}
