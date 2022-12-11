import { INPUT, GET_ROBOTS } from "./actions"
import { combineReducers } from "redux"

const initState = {
    robots: [],
    text: ''
}

export const reducer_input = (state=initState, action={}) => {
    switch (action.type) {
        case INPUT:
            return{...state,text:action.payload}
        default:
            return  {...state}
    }
}

export const reducer_robots = (state=initState, action={}) => {
    switch (action.type) {
        case GET_ROBOTS:
            return{...state,robots:action.payload}
        default:
            return  {...state}
    }
}

export const rootReducer = combineReducers ({
    reducer_input,
    reducer_robots
})

export default rootReducer