import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREMENT, DECREMENT } from "./constants";

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let temp = state.filter((item) =>
                item.id == action.data.id
            )
            if (temp.length == 0) {
                return [
                    ...state,
                    action.data
                ]
            } else {
                return [...state]
            }



        case REMOVE_FROM_CART:
            let result = state.filter(item => {
                return item.id != action.data
            })
            return [...result]



        case INCREMENT:
            let tempin = state.map(item => {
                if (item.id === action.data.id) {
                    return {...item,qty:item.qty+1}
                  
                } 
                return item
            })
            return [...tempin]


        case DECREMENT:
            let tempde = state.map(item => {
                if (item.id === action.data.id) {
                    return {...item,qty:item.qty-1}
                  
                } 
                return item
            })
            return [...tempde]



        case CLEAR_CART:
            return initialState


        default:
            return state

    }
}
