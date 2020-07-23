import { UserActions, UserActionsEnum } from "./user.action";
import { initialUserState } from "./user.state";

export const userReducers = (
    state = initialUserState,
    action: UserActions
) => {
    switch(action.type) {
        case UserActionsEnum.UpdateUser: {
            return {...state, user: action.payload};   
        }
        default: {
            return state;
        }
    }
}