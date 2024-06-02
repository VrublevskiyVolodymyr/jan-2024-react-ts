import axios, {AxiosError, AxiosRequestConfig} from "axios";

import {baseURL, urls} from "../configs";
import {ITokenPair} from "../interfaces";
import {createBrowserHistory} from "history";
import {IWaitListCB} from "../types/waitListType";
import {authService} from "./authService";
import {retriveLocalStorageData} from "./helpers";

const apiService = axios.create({
    baseURL,
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

let isRefreshing = false;
const waitList: IWaitListCB[] = [];
const history = createBrowserHistory({ window });

apiService.interceptors.request.use(request => {

    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenPair = retriveLocalStorageData<ITokenPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + iTokenPair.access);
    }

    return request;
})

apiService.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
        if (error.response?.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    await authService.refresh();
                    isRefreshing = false;
                    afterRefresh();
                    return apiService(originalRequest);
                } catch (e) {
                    authService.deleteTokens();
                    isRefreshing = false;
                    history.replace('/login?expSession=true');
                    return Promise.reject(error);
                }
            }

            if (originalRequest.url === urls.auth.refresh) {
                return Promise.reject(error);
            }

            return new Promise((resolve) => {
                subscribeToWaitList(() => resolve(apiService(originalRequest)));
            });
        }
        return Promise.reject(error);
    }
);

const subscribeToWaitList = (cb: IWaitListCB): void => {
    waitList.push(cb);
};

const afterRefresh = () => {
    while (waitList.length) {
        const cb = waitList.pop();
        cb?.();
    }
};

export { apiService, history };