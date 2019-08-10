const defaultState = {
    MenuList: [],
    recommendList: [],
    shopCart: {
        list: [],
        totalCount: 0,
        totalChoose: true,
        totalDelete: false
    }
}

export default (state = defaultState, action) => {
    switch (action.type) {
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
            for (let i = 0; i < newState2.shopCart.list.length - 1; i++) {
                if (newState2.shopCart.list[i].name === action.value.name) {
                    newState2.shopCart.list[i].count += action.value.count;
                    newState2.shopCart.list.splice(-1, 1);
                }
            }
            return newState2;
        case 'changeChooseStatus':
            let newState3 = JSON.parse(JSON.stringify(state));
            for (let i = 0; i < newState3.shopCart.list.length; i++) {
                if (i === action.value) {
                    newState3.shopCart.list[i].isChoose = !newState3.shopCart.list[i].isChoose;
                }
            }
            let a = newState3.shopCart.list.every((item, index) => {
                return item.isChoose === true;
            })
            newState3.shopCart.totalChoose = a;
            return newState3;
        case 'changeTotalChooseStatus':
            let newState4 = JSON.parse(JSON.stringify(state));
            newState4.shopCart.totalChoose = action.value;
            for (let i = 0; i < newState4.shopCart.list.length; i++) {
                newState4.shopCart.list[i].isChoose = action.value;
            }
            return newState4;
        case 'addShopCount':
            let newState5 = JSON.parse(JSON.stringify(state));
            for (let i = 0; i < newState5.shopCart.list.length; i++) {
                if (i === action.value) {
                    newState5.shopCart.list[i].count += 1;
                    newState5.shopCart.totalCount += 1;
                }
            }
            return newState5;
        case 'reduceShopCount':
            let newState6 = JSON.parse(JSON.stringify(state));
            for (let i = 0; i < newState6.shopCart.list.length; i++) {
                if (i === action.value) {
                    newState6.shopCart.list[i].count -= 1;
                    newState6.shopCart.totalCount -= 1;
                }
            }
            return newState6;
        case 'changeDeleteFlag':
            let newState7 = JSON.parse(JSON.stringify(state));
            for (let i = 0; i < newState7.shopCart.list.length; i++) {
                if (i === action.value) {
                    newState7.shopCart.list[i].deleteFlag = !newState7.shopCart.list[i].deleteFlag;
                }
            }
            let b = newState7.shopCart.list.every((item, index) => {
                return item.deleteFlag === true;
            })
            newState7.shopCart.totalDelete = b;
            return newState7;
        case 'changeTotalDeleteStatus':
            let newState8 = JSON.parse(JSON.stringify(state));
            newState8.shopCart.totalDelete = action.value;
            for (let i = 0; i < newState8.shopCart.list.length; i++) {
                newState8.shopCart.list[i].deleteFlag = action.value;
            }
            return newState8;
        case 'deleteShopCartItem': 
            let newState9 = JSON.parse(JSON.stringify(state));
            newState9.shopCart.list = newState9.shopCart.list.filter((item) => {
                return item.deleteFlag === false;
            })
            newState9.shopCart.totalCount = newState9.shopCart.list.reduce((prev, next) => {
                return prev + next.count;
            }, 0)
            return newState9
        default:
            return state;
    }
}