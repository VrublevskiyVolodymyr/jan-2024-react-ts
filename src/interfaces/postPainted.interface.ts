import {IPost} from "./post.interface";

export interface IPostPaintedInterface{
    posts:IPost[],
    total:number,
    skip:number,
    limit:number
}