
import { AxiosResponse } from 'axios';

import {IAuthService, IRes} from '../types';
import { urls } from "../configs";
import {IAuthData, ITokenPair, IUser} from "../interfaces";
import {apiService} from "./api.service";
import {retriveLocalStorageData} from "./helpers";



const authService: IAuthService = {


    login: async (cred: IAuthData): Promise<IUser> => {
        try {
            const { data }: AxiosResponse<ITokenPair> = await apiService.post(urls.auth.login, cred);
            authService.setTokens(data);
            const { data: user }: AxiosResponse<IUser> = await authService.me();
            return user;
        } catch (error) {
            throw error;
        }
    },

    refresh: async (): Promise<void> => {
        const refreshToken = authService.getRefreshToken();
        if (!refreshToken) {
            throw new Error("Refresh token isn't exists");
        }
        try {
            const { data }: AxiosResponse<ITokenPair> = await apiService.post(urls.auth.refresh, {
                refresh: refreshToken,
            });
            authService.setTokens(data);
        } catch (error) {
            throw new Error('Refresh failed');
        }
    },

    me: (): IRes<IUser> => {
        return apiService.get(urls.auth.me);
    },

    getAccessToken: (): string | null => {
        return retriveLocalStorageData<ITokenPair>('tokenPair').access;
    },

    deleteTokens: (): void => {
        localStorage.removeItem('tokenPair');
    },

    setTokens: (tokens: ITokenPair): void => {
        localStorage.setItem('tokenPair', JSON.stringify(tokens));
    },

    getRefreshToken: (): string | null => {
        return retriveLocalStorageData<ITokenPair>('tokenPair').refresh;
    },


};

export {authService};
