export const SET_STATUS = "SET_STATUS";

type StatusAction = {
    type: typeof SET_STATUS;
    payload: string;
};

const initialState = "normal";

const statusReducer = (state = initialState, action: StatusAction) => {
    switch (action.type) {
        case SET_STATUS:
            return action.payload;
        default:
            return state;
    }
};

export default statusReducer;
