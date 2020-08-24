const loadPaintModule = async source => {
    await CSS.paintWorklet.addModule(source);
};

const loadAnimateModule = async source => {
    await CSS.animationWorklet.addModule(source);
};

const loadLayoutModule = async source => {
    await CSS.layoutWorklet.addModule(source);
};

const loadPaints = async sources => {
    for (let source of sources) {
        await loadPaintModule(source);
    }
};

const loadAnimates = async sources => {
    for (let source of sources) {
        await loadAnimateModule(source);
    }
};

const loadLayouts = async sources => {
    for (let source of sources) {
        await loadLayoutModule(source);
    }
};

export {
    loadPaintModule,
    loadAnimateModule,
    loadLayoutModule,
    loadPaints,
    loadAnimates,
    loadLayouts,
};
