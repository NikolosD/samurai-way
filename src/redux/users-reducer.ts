import {ProfilePageType} from "../components/Profile/MyPosts/MyPostsContainer";


type UserLocationType = {
    city: string,
    country: string
}

export type UserPageType = {
    id: number,
    photoUrl: string
    followed: boolean,
    fullName: string
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
    users: [
        {id: 1, photoUrl: 'https://ih1.redbubble.net/image.3493741147.4284/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg', status: 'Hello to everyione', followed: false, fullName: 'Nick', location: {city: 'Tbilisi', country: 'Georgia'}},
        {id: 2, photoUrl: 'https://ih1.redbubble.net/image.3493741147.4284/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',status: 'Gamarjoba', followed: true, fullName: 'George', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photoUrl: 'https://ih1.redbubble.net/image.3493741147.4284/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',status: 'Great Views Here', followed: false, fullName: 'Nick', location: {city: 'Minsk', country: 'Belarus'}},
    ],
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