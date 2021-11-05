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
                    <div onClick={() => this.props.changeColor("red")} className="color-field" style={{background: "red"}}></div>
                    <div onClick={() => this.props.changeColor("black")} className="color-field" style={{background: "black"}}></div>
                    <div onClick={() => this.props.changeColor("blue")} className="color-field" style={{background: "blue"}}></div>
                    <div onClick={() => this.props.changeColor("green")} className="color-field" style={{background: "green"}}></div>

                    <fieldset className="brush-size-box">
                        <legend className="brush-size-title"> Brush Size </legend>
                        <select id="brush-size" onChange={() => this.props.changeBrushSize()}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </fieldset>
                    <fieldset className="color-picker-box">
                        <legend className="color-picker-title"> Pick Color </legend>
                        <input type="color" id="color-pick" onChange={() => this.props.pickColor()}/>
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default Toolbar;