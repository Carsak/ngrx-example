import { User } from "../models/user";

export interface UserState {
    user: User
}

export const initialUserState: UserState = {
    user: new User(),
}