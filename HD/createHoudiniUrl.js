const TYPE = {
    JS: 'js',
};
const MIME = {
    [TYPE.JS]: 'text/javascript',
};

/**
 * 
 * @param {String} codeTemplate 
 * @param {TYPE} type 
 */
const createHoudiniUrl = (codeTemplate, type = TYPE.JS) => {
    const blob = new Blob([codeTemplate], {
        type: MIME[type],
    });

    return URL.createObjectURL(blob);
};

export {
    TYPE,
    createHoudiniUrl,
}