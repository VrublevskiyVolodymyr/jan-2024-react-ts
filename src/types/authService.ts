import {IRes} from "./axiosRespType";
import {IAuthData, ITokenPair, IUser} from "../interfaces";

export type IAuthService = {
    login: (cred: IAuthData) => Promise<IUser>;
    refresh: () => Promise<void>;
    me: () => IRes<IUser>;
    getAccessToken: () => string | null;
    deleteTokens: () => void;
    setTokens: (tokens: ITokenPair) => void;
    getRefreshToken: () => string | null;
};