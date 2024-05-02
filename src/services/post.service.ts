import {IRes} from "../types/axiosRespType";
import {axiosInstance} from "./axios.service";
import {urls} from "../configs/urls";
import {IPost} from "../interfaces/post.interface";
import {IPostPaintedInterface} from "../interfaces/postPainted.interface";

const postService = {
    getAllPostsByUserId: (userId:number): IRes<IPostPaintedInterface> => axiosInstance.get(urls.posts(userId))
}


export {postService}