import React from 'react';
import Toolbar from './Toolbar';
import Board from './Board';
import './Container.css'

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            draw_color: "black",
            stroke_width: 3
        }
    }

    change_color = (color) => {
        this.setState({
            draw_color: color
        });
    }

    change_stroke = () => {
        const brush_size = document.querySelector("#size");
        this.setState({
            stroke_width: brush_size.value
        });
    }

    pickColor = () => {
        const color = document.querySelector("#color-pick");
        this.setState({
            draw_color: color.value
        });
    }

    erase = () => {
        this.setState({
            draw_color: "white"
        })
    }

    render() {
        console.log(this.state.draw_color);
        return (
            <div className="container">
                <Toolbar changeColor = {this.change_color}
                        changeBrushSize = {this.change_stroke}
                        pickColor = {this.pickColor}
                        erase = {this.erase}
                />
                <Board  draw_color={this.state.draw_color}
                        stroke_width={this.state.stroke_width}
                />
            </div>
        )
    }
}

export default Container;