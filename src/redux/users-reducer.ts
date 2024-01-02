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

export type UserStateType = {
    users: UserPageType[]
    pageSize: number,
    currentPage: number,
    totalUsersCount: number,
}

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType= ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>

type UserReducerActionType = followACType | unFollowACType | setUsersACType | setCurrentPageACType  | setTotalUsersCountType

const initialState : UserStateType = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 20
}
export const usersReducer = (state: UserStateType = initialState, action: UserReducerActionType) => {
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
                users: [...action.users]
            }
        }
        case "SET-CURRENT-PAGE":{
            return{
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT':{
            return{
                ...state,
                totalUsersCount: action.totalUsersCount
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

export const setCurrentPageAC = (currentPage: number)=>{
    return { type: 'SET-CURRENT-PAGE', currentPage} as const
}

export const setTotalUsersCountAC = ( totalUsersCount: number)=>{
    return {type: 'SET-TOTAL-USERS-COUNT', totalUsersCount} as const
}