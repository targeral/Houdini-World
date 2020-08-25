import { addProps, loadPaintModule } from '../../../HD/index.js';

export default async () => {
    addProps(
        [
            '--border-top-color',
            '--border-right-color',
            '--border-bottom-color',
            '--border-left-color',
        ].map(name => ({
            name,
            syntax: '<color>+',
            inherits: false,
            initialValue: 'currentcolor',
        }))
    );
    addProps(
        [
            '--border-top-width',
            '--border-right-width',
            '--border-bottom-width',
            '--border-left-width',
        ].map(name => ({
            name: name,
            syntax: '<number>',
            inherits: false,
            initialValue: '0',
        }))
    );

    await loadPaintModule('./houdini/paint/BorderColors/border-colors.js');
}