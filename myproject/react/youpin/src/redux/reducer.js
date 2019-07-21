const defaultState = {
    MenuList: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'changeMenuList':
            let newState = JSON.parse(JSON.stringify(state));
            newState.MenuList = action.value;
            return newState;
        default: 
            return state;
    }
}