import {IRes} from "../types/axiosRespType";
import {axiosInstance} from "./axios.service";
import {urls} from "../configs";
import {IPost} from "../interfaces";

const postService = {
    getAllPosts: (): IRes<IPost[]> => axiosInstance.get(urls.posts),
    getAllPostsOfUser: (userId:number): IRes<IPost[]> => axiosInstance.get(urls.postsOfUser(userId)),
}


export {postService}