import React from "react";
import store from "./Saga/store";

import {Provider} from 'react-redux'
import Counter from "./Saga/Counter";

function App() {
  
  return (
    <Provider store={store}>
    <div>
        <Counter/>
    </div>
    </Provider>
  )
}

export default App;
