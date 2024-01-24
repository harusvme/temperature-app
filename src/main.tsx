import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Reducers/statusReducer";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
