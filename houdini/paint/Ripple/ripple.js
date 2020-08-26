class Ripple {
    static get inputProperties() {
        return ['--ripple'];
    }

    paint(ctx, size, props) {
        const ripple = props.get('--ripple').toString();
        const xMid = size.width / 2;
        const yMid = size.height / 2;
        const timeFunc = function(t) {
            return t * t * (3 - 2 * t);
        };
        const adjustedParameter = (delta) => {
            let adjustParametricValue = ripple + delta;
            if (adjustParametricValue < 0) {
                adjustParametricValue ++;
            } else if (adjustParametricValue > 1) {
                adjustParametricValue --;
            }

            return adjustParametricValue;
        }

        const computeRadius = delta => 8 + 21 + timeFunc(adjustedParameter(delta));

        const drawRipple = delta => {
            const radius = computeRadius(delta);
            const opacity = 0.8 * (1 - timeFunc(adjustedParameter(delta)));
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.stroke();
        };

        ctx.lineWidth = 4;
        ctx.translate(xMid, yMid);
        drawRipple(0);
        drawRipple(0.5);
    }
}

registerPaint('ripple-painter', Ripple);