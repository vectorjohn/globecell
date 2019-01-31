import { Component, Element } from '@stencil/core';

@Component({
    tag: 'gc-viewport',
    shadow: true
})
export class GCViewport {

    @Element() element: HTMLElement;
    canvas: HTMLCanvasElement;

    componentDidLoad() {
        this.canvas = this.element.shadowRoot.querySelector('canvas');
        //window['thing'] = this.canvas;
        this.renderCanvas();
    }

    componentDidUpdate() {
        this.renderCanvas();
    }

    renderCanvas() {
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = 'blue';
        ctx.fillRect(10, 10, 150, 100);

        // Set line width
        ctx.lineWidth = 10;

        // Wall
        ctx.strokeRect(75, 140, 150, 110);

        // Door
        ctx.fillRect(130, 190, 40, 60);

        // Roof
        ctx.moveTo(50, 140);
        ctx.lineTo(150, 60);
        ctx.lineTo(250, 140);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeRect(5, 5, 290, 290);
    }

    render() {
        return (
            <canvas width="300" height="300"/>
        );
    }
}
