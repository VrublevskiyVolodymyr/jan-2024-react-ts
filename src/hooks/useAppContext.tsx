import { useContext } from "react";
import {Context} from "../hoc";
import {ICar, IUser} from "../interfaces";

interface ContextValue {
    trigger: boolean | null;
    changeTrigger: () => void;
    carForUpdate: ICar | null;
    changeSetCarForUpdate: (value: ICar | null) => void;
    me: IUser | null;
    changeSetMe: (value: IUser | null) => void;
}

const useAppContext = (): ContextValue => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("useAppContext must be used within a ContextProvider");
    }

    return context;
};

export { useAppContext };
