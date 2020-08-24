const errorLog = feature => console.log`your browser not support' ${feature}`;

const typeOMCanUse = (element) => {
    return element.attributeStyleMap && element.computedStyleMap;
}

const registerPropertyCanUse = () => {
    return Boolean(CSS.registerProperty);
}

const paintApiCanUse = () => {
    return Boolean('paintWorklet' in CSS);
}

const HoudiniCheck = (element) => {
    if (!typeOMCanUse(element)) {
        errorLog('typeOM');
        return false;
    }

    if (!registerPropertyCanUse()) {
        errorLog('CSS.registerProperty');
        return false;
    }

    if (!paintApiCanUse()) {
        errorLog('paintAPI');
        return false;
    }

    return true;
};

export {
    HoudiniCheck,
};
