// 1. useToggle - custom React hook that allows a component to toggle a value between true and false

import {useState} from "react";

export const useToggle  = (initValue: boolean) => {
    const [value, setValue] = useState(initValue);

    const toggle = () => {
        setValue((prevValue) => !prevValue);
    };

    return [value, toggle];

};

