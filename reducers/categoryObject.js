const initialState = {
    categoryArr: []
}

const categoryObject = (state = initialState, action) => {
    switch(action.type){
        case "SET_CATEGORY_LIST":
            return {
                ...state,
                categoryArr: [...state.categoryArr, action.payload]
            }
        default:
            return state
    }
}

export default categoryObject;