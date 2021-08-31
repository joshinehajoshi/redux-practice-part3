const initialState = 0;

const incrementNum = (state = initialState, action) => {
    switch(action.type){
        case "Add To Cart":
            return state + 1;
        default:
            return state
    }
}

export default incrementNum;