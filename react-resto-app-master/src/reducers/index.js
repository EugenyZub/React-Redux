const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED': 
            return {
                ...state,
                menu: action.payload,
                loading: false
            }
        case 'MENU_REQUESTED': 
            return {
                ...state,
                loading: true,
                error: false
            }
        case 'MENU_ERROR': 
            return {
                ...state,
                loading: false,
                error: true
            }
        case 'ITEM_ADD_TO_CARD': 
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            };
            return {
                ...state,
                total: state.total + item.price,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        case 'ITEM_REMOVE_FROM_CARD': 
            const index = action.payload;
            //const itemIndex = state.items.findIndex(item => item.id === index);
            const aaa = state.items.filter(item => item.id !== index);
            return {
                ...state,
                total: state.total - action.removingPrice,
                items: [
                    ...aaa
                    // ...state.items.slice(0, itemIndex),
                    // ...state.items.slice(itemIndex + 1)
                ]
            }

        default: 
            return state;
    }
}

export default reducer;