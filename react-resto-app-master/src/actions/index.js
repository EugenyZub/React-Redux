const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuError = (error) => {
    return {
        type: 'MENU_ERROR'
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError
};