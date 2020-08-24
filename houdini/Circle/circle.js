class CirclePaint {
    
    static get inputProperties() {
        return ['--circle-color'];
    }
    /**
     * 
     * @param {C} ctx 
     * @param {*} size 
     * @param {*} props 
     */
    paint(ctx, size, props) {
        const color = props.get('--circle-color');

        ctx.fillStyle = color;

        const x = size.width / 2;
        const y = size.height / 2;
        const radius = Math.min(x, y);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }    
};

registerPaint('circle', CirclePaint);