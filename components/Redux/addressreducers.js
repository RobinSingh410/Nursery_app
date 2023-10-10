import { ADD_ADDRESS,DELETE_ADDRESS } from "./constants";

const initialState = [];

export const addressreducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return [
                ...state,
                action.data
            ]

        case DELETE_ADDRESS:
            let result = state.filter(item => {
                return item.id != action.data
            })
            return [...result]


        default:
            return state

    }
}
