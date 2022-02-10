const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;

//npm init -y

// actions
// action-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';

const addSubscriber = () =>{
    return{
        type: ADD_SUBSCRIBER
    }
}

const addViewCount = () =>{
    return{
        type: ADD_VIEWCOUNT
    }
}

// reducers
const subscriberState = {
    subscribers : 10
}


//액션 타입을 통해서 핸들링을 함.
const subscriberReducer = (state=subscriberState, action)=>{
    switch (action.type) {
        case ADD_SUBSCRIBER:

            return{
                ...state,
                subscribers : state.subscribers + 1 
            } 
        default: return state;    
        
    }
}

//----------------------------------------------------------------------------------------
//조회수 리듀서 만들기.
const viewState = {
    viewCount : 100
}

const viewReducer = (state = viewState,action) => {    
    
    switch (action.type) {
        case ADD_VIEWCOUNT:
           // console.log('먹음?')
            return{
                
                ...state,
                viewCount: state.viewCount + 1
            }
            
            
            default: return state;
            
    }

}

const rootReducer = combineReducers({
    view: viewReducer,
    subscriber: subscriberReducer
})


// store
const store = createStore(rootReducer, applyMiddleware(logger));

//subscribe - view - dispatch

// store.subscribe(() =>{
//     console.log(store.getState());
// });

//디스패치를 통해 핸들링을 수행.
store.dispatch(addSubscriber());
store.dispatch(addViewCount());



