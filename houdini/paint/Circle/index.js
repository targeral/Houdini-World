import {addProp, loadPaintModule} from '../../../HD/index.js';
import url from './workletUrl.js';

export default async () => {
    addProp({
        name: '--circle-color',
        syntax: '<color>',
        initialValue: 'black',
        inherits: false,
    });
    await loadPaintModule(url);
    // await loadPaintModule('./houdini/Circle/circle.js');
};

