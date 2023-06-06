import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const initialStore = { token: null, user: null}

const rootReducer = (state = initialStore, action) =>{
    
    if(action.type === "setToken"){
        return{
            ...state,
            token: action.payload
        }    
    }
    if(action.type === "nullToken"){
        return{
            ...state,
            token: null
        }
    }
    if(action.type === "setUser"){
        return{
            ...state,
            user: action.payload
        }    
    }
    if(action.type === "nullUser"){
        return{
            ...state,
            user: null
        }
    }
    if(action.type === "logout"){
        return{
            ...state,
            user: null,
            token: null
        }
    }

    return state
}
const persistConfig = {
    key: 'root',
    storage: storage
}


const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

