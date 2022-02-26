const expenseAmount = (incrementObj) => {
    return {
        type: "EXPENSE_AMOUNT",
        payload: incrementObj
    }
}

const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export default {
    expenseAmount,
    decrement
}