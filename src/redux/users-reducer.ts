import {ProfilePageType} from "../components/Profile/MyPosts/MyPostsContainer";


type UserLocationType = {
    city: string,
    country: string
}

type photoType ={
    small?: string
    large?: string
}

export type UserPageType = {
    id: number,
    photos: photoType
    followed: boolean,
    name: string
    status: string
    location: UserLocationType
}

type InitialStateType = {
    users: UserPageType[]
}

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType= ReturnType<typeof setUsersAC>

type UserReducerActionType = followACType | unFollowACType | setUsersACType

const initialState : InitialStateType = {
    users: [],
}
export const usersReducer = (state: InitialStateType = initialState, action: UserReducerActionType) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }

        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case "SET-USERS":{
            return{
                ...state,
                users: [...state.users,...action.users]
            }
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}
export const unFollowAC = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}

export const setUsersAC = (users: UserPageType[]) => {
    return {type: 'SET-USERS', users} as const
}