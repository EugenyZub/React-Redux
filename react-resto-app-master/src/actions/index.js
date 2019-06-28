const menuLoaded = (newMenu) => {
    return {
        type: 'MWNU_LOADED',
        payload: newMenu
    };
};

export {
    menuLoaded
};