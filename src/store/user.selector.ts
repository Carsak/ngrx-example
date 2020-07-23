import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";
import { User } from "../models/user";


const userSelector = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
    userSelector,
    (state: UserState) : User => state.user
);