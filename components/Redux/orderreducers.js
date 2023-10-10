import { ADD_ORDER,DELETE_ORDER,CLEAR_CART } from "./constants";

const initialState = [];

export const orderreducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return [
                ...state,
                action.data
            ]

        case DELETE_ORDER:
            let result = state.filter(item => {
                return item.id != action.data
            })
            return [...result]


        default:
            return state

    }
}
