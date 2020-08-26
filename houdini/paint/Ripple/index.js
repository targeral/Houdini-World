import { addProp, loadPaintModule } from '../../../HD/index.js';
import { PaintPath } from '../../path.js';

export default async () => {
    addProp({
        name: '--ripple',
        syntax: '<number>',
        inherits: false,
        initialValue: '0',
    });

    await loadPaintModule(PaintPath`/Ripple/ripple.js`)
}