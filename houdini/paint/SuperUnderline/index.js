import { addProps, loadPaintModule } from '../../../HD/index.js';

export default async () => {
    addProps([
        {
            name: '--extra-underlineNumber',
            syntax: '<number>',
            inherits: false,
            initialValue: 3,
        },
        {
            name: '--extra-underlineColor',
            syntax: '<color>',
            inherits: false,
            initialValue: 'black',
        },
        {
            name: '--extra-underlineSpread',
            syntax: '<number>',
            inherits: false,
            initialValue: 20,
        },
        {
            name: '--extra-underlineWidth',
            syntax: '<number>',
            inherits: false,
            initialValue: 2,
        },
    ]);

    await loadPaintModule('./houdini/paint/SuperUnderline/super-underline.js');
}