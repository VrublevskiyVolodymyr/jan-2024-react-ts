import {IUser} from "./user.interface";

export interface IUserPainted{
users:IUser[],
    total:number,
    skip:number,
    limit:number
}