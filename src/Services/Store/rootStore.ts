import { Store, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store: Store = createStore(rootReducer, enhancer);

export default store;
