
export const incrementer=()=>{
    return {
        type:"INCREMENT",
        payload:1
    }
}
export const decrementer=()=>{
    return {
        type:"DECREMENT",
        payload:1
    }
}