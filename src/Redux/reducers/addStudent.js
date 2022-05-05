const initState=[];

const studentReducer = (state=initState,action)=>{
    switch(action.type){
        case "ADD_STUDENT":
            return [...state,action.payload]
        default :
            return [...state];
    }
}   
export default studentReducer;