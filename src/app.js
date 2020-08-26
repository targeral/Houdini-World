import { HoudiniCheck } from '../HD/index.js';
import PaintCircle from '../houdini/paint/Circle/index.js';
import PaintSuperUnderLine from '../houdini/paint/SuperUnderline/index.js';
import PaintBorderColors from '../houdini/paint/BorderColors/index.js';
import PaintRing from '../houdini/paint/Ring/index.js';
import PaintRipple from '../houdini/paint/Ripple/index.js';

const init = async () => {
    const supportHoudini = HoudiniCheck(document.documentElement);
    if (supportHoudini) {
        console.log('Congratulations, Your Browser Support Houdini');
        await PaintCircle();
        await PaintSuperUnderLine();
        await PaintBorderColors();
        await PaintRing();
        await PaintRipple();
    }
};

window.addEventListener('load', () => {
    init();
});
