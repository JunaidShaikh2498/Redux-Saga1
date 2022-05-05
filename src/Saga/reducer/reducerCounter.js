const initState=0;

const countReducer=(state=initState,action)=>{
    switch(action.type){
        case "SAGA_INCREMENT":
            return state+action.payload
    
        case "SAGA_DECREMENT":
            return state-1
        
        default:
            return state    
        }
}

export default countReducer