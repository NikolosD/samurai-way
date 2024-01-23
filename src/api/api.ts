import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '73b72e7c-dd81-4568-9fb1-ea8a8ccd90e7'}
})


export const UserApi = {
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
    }
}