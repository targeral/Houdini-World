import { createHoudiniUrl } from '../../../HD/index.js';

export default createHoudiniUrl(
`
const CSSCustomProps = [
    '--comet-head-degrees',
    '--comet-tail-degrees',
];

class Ring {
    static get inputProperties() {
        return CSSCustomProps;
    }

    paint(ctx, size, props) {
        const cometHeadDeg = props.get('--comet-head-degrees');
        const cometTailDeg = props.get('--comet-tail-degrees');
        const xMid = size.width / 2;
        const yMid = size.height / 2;
        const radius = Math.min(xMid, yMid) * 0.7;
        const degreesToRadians = Math.PI / 180;
        const cometHeadDegrees = parseFloat(cometHeadDeg.toString());
        const cometTailDegrees = parseFloat(cometTailDeg.toString());

        const startAngle = degreesToRadians * cometTailDegrees;
        const endAngle = degreesToRadians * cometTailDegrees;

        ctx.lineWidth = 6;
        ctx.strokeStyle = 'black';
        ctx.arc(xMid, yMid, radius, startAngle, endAngle);
        ctx.stroke();
    }
}

registerPaint('ring-painter', Ring);
`
);
