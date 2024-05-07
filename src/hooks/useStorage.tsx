// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage

import {useState} from "react";

export const useStorage = <T, >(key: string, initialValue: T) => {
    const storedValue = localStorage.getItem(key) || null;
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState<T>(initial);

    const updateValue = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [value, updateValue]

}