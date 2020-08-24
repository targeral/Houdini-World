const getProps = props => CSSKeys => {
    return CSSKeys.map(cssKey => props.get(cssKey));
};

export {
    getProps,
};
