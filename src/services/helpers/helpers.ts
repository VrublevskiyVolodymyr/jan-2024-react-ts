export const retriveLocalStorageData = <T, >(key: string): T => {
    const pairJSON = localStorage.getItem(key);
    if (!pairJSON) {
        return {} as T;
    }

    try {
        const pair = JSON.parse(pairJSON);
        return pair as T;
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return {} as T;
    }
};
