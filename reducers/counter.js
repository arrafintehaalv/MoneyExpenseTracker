const initState = {
    expense: 0,

}

const counter = (state = initState, action) => {
    console.log("state", state)
    switch(action.type){
        case "EXPENSE_AMOUNT":
            return {
                ...state,
                expense: state.expense + action.payload
            }
        default: 
            return {
                ...state
            }
    }
}

export default counter