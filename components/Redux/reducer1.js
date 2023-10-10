import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,CLEAR_CART } from "./constants";

const initialState = [];

export const reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            let temp = state.filter((item)=>
             item.id == action.data.id
            )
            if (temp.length==0){
                return [
                    ...state,
                    action.data
                ]
            }else{
                return [...state]
            }
            
            
        case REMOVE_FROM_WISHLIST:
            let result = state.filter(item => {
                return item.id != action.data
            })
            return [...result]


        case CLEAR_CART:
            return initialState
                

        default:
            return state

    }
}
