import { addProps, loadPaintModule } from '../../../HD/index.js';
import workletUrl from './workletUrl.js';

export default async () => {
    addProps([
        {
            name: '--comet-head-degrees',
            syntax: '<number>',
            inherits: false,
            initialValue: '0'
        },
        {
            name: '--comet-tail-degrees',
            syntax: '<number>',
            inherits: false,
            initialValue: '0',
        },
    ]);

    await loadPaintModule('./houdini/paint/Ring/ring.js');
};