import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "@redux-devtools/extension"
import {getAllPizaReducer, addPizzaReducer, getPizzaByIdReducer, updatePizzaByIdReducer,} from './reduser/PizaReducer'
import { cartReducer } from "./reduser/cartReducer"
import { registerUserReducer } from "./reduser/userReducer"
import { loginUserReducer , getAllUsersReducer} from "./reduser/userReducer"
import {placeOrderReducer, getUserOrdersReducer, allUserOrdersReducer} from "./reduser/orderReducer"

const cartItems = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const rootReducer = combineReducers({
    getAllPizaReducer:getAllPizaReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addPizzaReducer : addPizzaReducer,
    getPizzaByIdReducer : getPizzaByIdReducer,
    updatePizzaByIdReducer : updatePizzaByIdReducer,
    allUserOrdersReducer : allUserOrdersReducer,
    getAllUsersReducer : getAllUsersReducer
    
})
 
const initialState = {
    cartReducer: {
        cartItems:cartItems
    },
    loginUserReducer: {
        currentUser:currentUser
    }
}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
    );
export default store;