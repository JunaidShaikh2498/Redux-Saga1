import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import createSagaMiddleware from 'redux-saga'
import { increaser } from "./saga";

const myMiddleware=createSagaMiddleware()

const store=createStore(rootReducer,applyMiddleware(myMiddleware))
 myMiddleware.run(increaser)
//  myMiddleware.run(decreaser)

export default store