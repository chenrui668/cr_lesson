const defaultState = {
    MenuList: [],
    recommendList: [],
    shopCart: {
        list: [],
        totalCount: 0,
        totalPrice: 0
    }
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
        case 'addShopCart':
            let newState2 = JSON.parse(JSON.stringify(state));
            newState2.shopCart.list.push(action.value);
            newState2.shopCart.totalCount += action.value.count;
            newState2.shopCart.totalPrice += action.value.count * action.value.price;
            for (let i = 0; i < newState2.shopCart.list.length - 1; i ++) {
                if (newState2.shopCart.list[i].name === action.value.name) {
                    newState2.shopCart.list[i].count += action.value.count;
                    newState2.shopCart.list.splice(-1, 1);
                }
            }
            return newState2;
        default: 
            return state;
    }
}