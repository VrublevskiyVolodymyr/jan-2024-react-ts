import {IRes} from "../types/axiosRespType";
import {axiosInstance} from "./axios.service";
import {urls} from "../configs";
import {IComment} from "../interfaces";

const commentService = {
    getAllComments: (): IRes<IComment[]> => axiosInstance.get(urls.comments),
    getAllCommentsOfPost: (postId:number): IRes<IComment[]> => axiosInstance.get(urls.commentsOfPost(postId)),
}


export {commentService}