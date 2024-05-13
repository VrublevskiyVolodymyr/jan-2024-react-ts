import {IPost} from "../interfaces";
import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const postService = {
    createPost:(data:IPost):IRes<IPost> => axiosService.post(urls.post, data)
}