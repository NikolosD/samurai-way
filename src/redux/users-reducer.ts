import {Dispatch} from "redux";
import {UserApi} from "../api/api";


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
    isFetching: boolean,
    isToggling : boolean,
    followingInProgress: number[]
}

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType= ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

type UserReducerActionType = followACType | unFollowACType | setUsersACType | setCurrentPageACType  | setTotalUsersCountType | ToggleIsFetchingType | ToggleFollowingProgressType

const initialState : UserStateType = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 50,
    isFetching: false,
    isToggling: false,
    followingInProgress: []
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
        case 'SET-IS-FETCHING':{
            return{
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress:
                    action.followingInProgress
                        ? [...state.followingInProgress, action.id]
                        : state.followingInProgress.filter(id => id !== action.id)
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

export const toggleIsFetching = (isFetching: boolean)=>{
    return {type: 'SET-IS-FETCHING', isFetching} as const
}
export const toggleFollowingProgress = (followingInProgress: boolean, id: number) => ({
    type: 'TOGGLE-FOLLOWING-PROGRESS' as const, followingInProgress, id
})

export const getUserTC = (currentPage:number, pageSize:number) => (dispatch: Dispatch)=>{
   dispatch(toggleIsFetching(true))
    UserApi.getUser(currentPage,pageSize)
        .then(data => {
          dispatch(toggleIsFetching(false))
            dispatch(setCurrentPageAC(currentPage));
            dispatch(setUsersAC(data.items))
            setTotalUsersCountAC(data.totalCount >= 100 ? 100 : data.totalCount)
        })
}

export const followTC = (id:number) => (dispatch:Dispatch)=>{
    dispatch(toggleFollowingProgress(true,id))
    UserApi.followUser(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(toggleFollowingProgress(false,id))
        }).catch(error => {
        console.error('Error fetching users:', error);
    });
}

export const unfollowTC = (id:number) => (dispatch:Dispatch)=>{
    dispatch(toggleFollowingProgress(true,id))
    UserApi.unFollowUser(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowAC(id))
            }
            dispatch(toggleFollowingProgress(false,id))
        }).catch(error => {
        console.error('Error fetching users:', error);
    });
}