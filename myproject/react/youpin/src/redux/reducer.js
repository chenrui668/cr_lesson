const defaultState = {
    MenuList: [],
    recommendList: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'changeMenuList':
            let newState = JSON.parse(JSON.stringify(state));
            newState.MenuList = action.value;
            return newState;
        case 'addRecommendList': 
            let newState1 = JSON.parse(JSON.stringify(state));
            newState1.recommendList = action.value;
            return newState1;
        default: 
            return state;
    }
}