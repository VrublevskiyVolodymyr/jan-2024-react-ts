import React, { createContext, useState, FC, ReactNode } from "react";
import {ICar, IUser} from "../interfaces";

interface ContextValue {
    trigger: boolean | null;
    changeTrigger: () => void;
    carForUpdate: ICar | null;
    changeSetCarForUpdate: (value: ICar | null) => void;
    me: IUser | null;
    changeSetMe: (value: IUser | null) => void;
}

const Context = createContext<ContextValue | undefined>(undefined);

interface IProps {
    children: ReactNode;
}

const ContextProvider: FC<IProps> = ({ children }) => {
    const [trigger, setTrigger] = useState<boolean | null>(null);
    const changeTrigger = () => {
        setTrigger(prev => !prev);
    };
    const [carForUpdate, setCarForUpdate] = useState<ICar | null >(null);
    const changeSetCarForUpdate = (value:ICar | null) => {
        setCarForUpdate(value);
    };

    const [me, setMe] = useState<IUser | null >(null);
    const changeSetMe = (value:IUser | null) => {
        setMe(value);
    };

    return (
        <Context.Provider value={{ trigger, changeTrigger, carForUpdate, changeSetCarForUpdate, me, changeSetMe }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };
