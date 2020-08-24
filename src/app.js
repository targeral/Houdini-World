import { HoudiniCheck } from '../HD/index.js';
import PaintCircle from '../houdini/Circle/index.js';
import PaintSuperUnderLine from '../houdini/SuperUnderline/index.js';

const init = async () => {
    const supportHoudini = HoudiniCheck(document.documentElement);
    if (supportHoudini) {
        console.log('Congratulations, Your Browser Support Houdini');
        await PaintCircle();
        await PaintSuperUnderLine();
    }
};

window.addEventListener('load', () => {
    init();
});
