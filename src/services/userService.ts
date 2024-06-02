import {urls} from "../configs";
import {apiService} from "./api.service";
import {IAuthData, IUser} from "../interfaces";
import {IRes, IUserService} from "../types";

const userService:IUserService = {
    create: (user:IAuthData): IRes<IUser>=> apiService.post(urls.users, user)
}
export {
    userService
}