import { getProps } from '../../HD/index.js';

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const CSSCustomProps = [
    '--extra-underlineNumber',
    '--extra-underlineColor',
    '--extra-underlineSpread',
    '--extra-underlineWidth',
];
class SuperUnderLine {

    static get inputProperties() {
        return CSSCustomProps;
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 实际上应该是PaintRenderingContext2D，是CanvasRenderingContext2D子集，所以某些方法会不存在。
     * @param {{width: number, height: number}} size 
     * @param {*} prop 
     */
    paint(ctx, size, props) {
        const [numUnderlines, color, spread, lineWidth] = getProps(props)(CSSCustomProps);
        console.log('numberLines', numUnderlines);
        console.log('color', color);
        console.log('spread', spread);
        console.log('lineWidth', lineWidth);

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;

        for (let i = 0; i < numUnderlines; i++) {
            ctx.beginPath();
            ctx.moveTo(0, getRandom(0, spread) + size.height / 1.4);
            ctx.lineTo(size.width, getRandom(0, spread) + size.height / 1.4);
            ctx.stroke();
        }
    }
}

registerPaint('super-underline', SuperUnderLine);