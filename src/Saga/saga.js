import axios from 'axios'
import {put,takeLatest} from 'redux-saga/effects'

function fetchTheUser(id) {
    return axios.get('https://jsonplaceholder.typicode.com/todos/'+id)
}

function* increaseSync(){
    const data1= yield fetchTheUser(5)
    yield put({type:"SAGA_INCREMENT",payload: data1.data.id })
}
function* decreaseSync(){
    const data2 = yield fetchTheUser(5)
    yield put({type:"SAGA_DECREMENT",payload: data2.data.id })
}

export function* increaser(){
    yield takeLatest("INCREMENT",increaseSync)
}
export function* decreaser(){
    yield takeLatest("DECREMENT",decreaseSync)
}