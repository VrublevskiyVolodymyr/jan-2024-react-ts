import {IRes} from "./axiosRespType";
import {IAuthData, IUser} from "../interfaces";

export type IUserService = {
    create: (user:IAuthData) => IRes<IUser>;
}