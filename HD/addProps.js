const addProp = (option) => {
    CSS.registerProperty(option);
};

const addProps = options => {
    options.forEach(option => addProp(option));
};

export {
    addProp,
    addProps,
};