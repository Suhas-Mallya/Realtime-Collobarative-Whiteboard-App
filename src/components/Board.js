import React from 'react';
import './Board.css';

class Board extends React.Component {

    drawOnCanvas() {
        const canvas = document.querySelector("#board");
        let ctx = canvas.getContext('2d');

        const sketch = document.querySelector(".sketch");
        let sketch_style = getComputedStyle(sketch);

        canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        canvas.height = parseInt(sketch_style.getPropertyValue('height'));

        ctx.fillStyle = "white";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        let draw_color = "black";
        let draw_width = "5";
        let is_drawing = false;

        canvas.addEventListener("touchstart", start, false);
        canvas.addEventListener("touchmove", draw, false);
        canvas.addEventListener("mousedown", start, false);
        canvas.addEventListener("mousemove", draw, false);

        canvas.addEventListener("touchend", stop, false);
        canvas.addEventListener("mouseup", stop, false);
        canvas.addEventListener("mouseout", stop, false);


        function start(event) {
            is_drawing = true;
            ctx.beginPath();
            ctx.moveTo(event.clientX - canvas.offsetLeft,
                        event.clientY - canvas.offsetTop);
            event.preventDefault();
        }

        function draw(event) {
            if(is_drawing) {
                ctx.lineTo(event.clientX - canvas.offsetLeft,
                            event.clientY - canvas.offsetTop);
                ctx.strokeStyle = draw_color;
                ctx.lineWidth = draw_width;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.stroke();
            }
            event.preventDefault();
        }

        function stop(event) {
            if(is_drawing) {
                ctx.stroke();
                ctx.closePath();
                is_drawing = false;
            }
            event.preventDefault();
        }

    }

    componentDidMount() {
        this.drawOnCanvas();
    }

    render() {
        return (
            <div className="sketch">
                <canvas className="board" id="board"> 
                </canvas>
            </div>
        )
    }
}

export default Board;