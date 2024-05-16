import {IRes} from "../types/axiosRespType";
import {axiosInstance} from "./axios.service";
import {urls} from "../configs";
import {IComment, IPost, IUser} from "../interfaces";

const userService = {
    getAllUsers: (): IRes<IUser[]> => axiosInstance.get(urls.users),
    getAllPosts: (): IRes<IPost[]> => axiosInstance.get(urls.posts),
    getAllComments: (): IRes<IComment[]> => axiosInstance.get(urls.comments)
}


export {userService}