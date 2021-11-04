import React from 'react';
import './Toolbar.css';

 class Toolbar extends React.Component {

    render() {
        return (
            <div className="toolbar">
                <div className="leftpanel">
                    <i className="fas fa-undo-alt"></i>
                    <i className="fas fa-trash-alt"></i>
                </div>
                <div className="middlepanel">
                    <span><b>Collobarative WhiteBoard</b></span>
                </div>
                <div className="rightpanel">
                    <div className="color-field" style={{background: "red"}}></div>
                    <div className="color-field" style={{background: "black"}}></div>
                    <div className="color-field" style={{background: "blue"}}></div>
                    <div className="color-field" style={{background: "green"}}></div>
                </div>
            </div>
        )
    }
}

export default Toolbar;