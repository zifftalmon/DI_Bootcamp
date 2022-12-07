import { INSERT } from "./actions"
import { UPDATE_INDEX } from "./actions"
import { UPDATE } from "./actions"
import { DELETE } from "./actions"
import { addToLocalStorage, getFromLocalStorage } from "../helper/storage"


const initState = {
    account: getFromLocalStorage('trx'),
    currentIndex: -1
}

export const reducer = (state=initState, action={}) => {
    switch(action.type) {
        case INSERT:
            const newList = [...state.account]
            newList.push(action.payload)
            addToLocalStorage('trx', newList)
            return {...state, account:newList, currentIndex:-1}


        case UPDATE_INDEX:
            return {...state, currentIndex:action.payload}
        

        case UPDATE:
            state.account[state.currentIndex] = action.payload
            addToLocalStorage('trx', [...state.account])
                return{...state, account: [...state.account], currentIndex: -1}
        

        case DELETE:
            state.account.splice(action.payload, 1);
            addToLocalStorage('trx', [...state.account])
            return{...state, account:[...state.account], currentIndex: -1}

        default:
            return {...state}
    }    
}