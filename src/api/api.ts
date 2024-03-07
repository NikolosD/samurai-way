import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '73b72e7c-dd81-4568-9fb1-ea8a8ccd90e7'}
})


export const UserAPI = {
    getUser(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
            .catch(error => {
                console.error('Error fetching users:', error)
            });
    },

    followUser(id: number) {
        return instance.post(`follow/${id}`, {}).then(res => res.data)
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`,).then(res => res.data)
    },

}

export const ProfileAPI ={
    getProfile(userId: string){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`, {status})
    }
}

export const authApi = {
    me(){
        return instance.get<ResponseType<{ id: number; email: string; login: string ,isAuth:boolean}>>('auth/me')
    },
    login(data: LoginData){
        return instance.post<ResponseType<{userId?: number}>>('auth/login',data )
    },
    logout(){
        return instance.delete<ResponseType<{ userId?: number }>>("auth/login");
    }
}

export type LoginData = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: string;
}

export type ResponseType<D = {}> = {
    resultCode: number;
    messages: Array<string>;
    data: D;
};