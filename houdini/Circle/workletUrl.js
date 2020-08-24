import { createHoudiniUrl } from '../../HD/index.js';

export default createHoudiniUrl(
`
class CirclePaint {
    constructor() {
        console.log('adadf');
    }

    static get inputProperties() {
        return ['--circle-color'];
    }

    paint(ctx, size, props) {
        const color = props.get('--circle-color');
        console.log('color', color.toString());

        ctx.fillStyle = color.toString();

        const x = size.width / 2;
        const y = size.height / 2;
        const radius = Math.min(x, y);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }    
};

registerPaint('circle', CirclePaint);
`
);