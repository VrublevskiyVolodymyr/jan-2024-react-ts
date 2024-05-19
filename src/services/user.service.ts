import {IRes} from "../types/axiosRespType";
import {axiosInstance} from "./axios.service";
import {urls} from "../configs";
import {IComment, IPost, IUser} from "../interfaces";

const userService = {
    getAllUsers: (): IRes<IUser[]> => axiosInstance.get(urls.users),
    getAllPosts: (): IRes<IPost[]> => axiosInstance.get(urls.posts),
    getAllPostsOfUser: (userId:number): IRes<IPost[]> => axiosInstance.get(urls.postsOfUser(userId)),
    getAllComments: (): IRes<IComment[]> => axiosInstance.get(urls.comments),
    getAllCommentsOfPost: (postId:number): IRes<IComment[]> => axiosInstance.get(urls.commentsOfPost(postId)),
}


export {userService}