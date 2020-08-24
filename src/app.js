import { HoudiniCheck } from './HD/index.js';

const init = async () => {
    const supportHoudini = HoudiniCheck(document.documentElement);
    if (supportHoudini) {
        console.log('Congratulations, Your Browser Support Houdini')
    }
};

window.addEventListener('load', () => {
    init();
});
