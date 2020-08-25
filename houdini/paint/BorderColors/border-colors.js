import { getProps } from '../../../HD/index.js';

const BorderWidthProps = [
    '--border-top-width',
    '--border-right-width',
    '--border-bottom-width',
    '--border-left-width',
];

const CSSCustomProps = [
    ...BorderWidthProps,
    '--border-top-color',
    '--border-right-color',
    '--border-bottom-color',
    '--border-left-color',
];

class BorderColors {
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
        // 定义坐标
        // define coordinate

        const t = 0;
        const b = size.height;
        const l = 0;
        const r = size.width;

        const [tw, rw, bw, lw] = getProps(props)(BorderWidthProps);

        const ti = tw;
        const ri = size.width - rw;
        const bi = size.height - bw;
        const li = lw;
        
        let tp, rp, bp, lp, colors;
        const updateProgression = () => {
            tp = tw / colors.length;
            rp = rw / colors.length;
            bp = bw / colors.length;
            lp = lw / colors.length;
        }

        colors = props.getAll('--border-top-color');
        updateProgression();
        for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i].toString();
        this.fillQuad(ctx,
            li - lp * i, ti - tp * i,
            li - lp * (i+1), ti - tp * (i+1),
            ri + lp * (i+1), ti - tp * (i+1),
            ri + lp * i, ti - tp * i);
        }

        colors = props.getAll('--border-right-color');
        updateProgression();
        for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i].toString();
        this.fillQuad(ctx,
            ri + rp * i, ti - tp * i,
            ri + rp * (i+1), ti - tp * (i+1),
            ri + rp * (i+1), bi + bp * (i+1),
            ri + rp * i, bi + bp * i);
        }

        colors = props.getAll('--border-bottom-color');
        updateProgression();
        for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i].toString();
        this.fillQuad(ctx,
            ri + rp * i, bi + bp * i,
            ri + rp * (i+1), bi + bp * (i+1),
            li - lp * (i+1), bi + bp * (i+1),
            li - lp * i, bi + bp * i);
        }

        colors = props.getAll('--border-left-color');
        updateProgression();
        for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i].toString();
        this.fillQuad(ctx,
            li - lp * i, bi + bp * i,
            li - lp * (i+1), bi + bp * (i+1),
            li - lp * (i+1), ti - tp * (i+1),
            li - lp * i, ti - tp * i);
        }
    }

    fillQuad(ctx, x1, y1, x2, y2, x3, y3, x4, y4) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.lineTo(x1, y1);
        ctx.fill();
    }
}

registerPaint('border-colors', BorderColors);