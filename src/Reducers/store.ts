import { createStore, combineReducers } from "redux";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
    status: statusReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
