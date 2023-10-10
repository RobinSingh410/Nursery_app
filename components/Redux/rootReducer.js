import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { reducer1 } from "./reducer1";
import { addressreducers } from "./addressreducers";
import { orderreducers } from "./orderreducers"; 

export default combineReducers({
    reducer,
    reducer1,
    addressreducers,
    orderreducers,

})
