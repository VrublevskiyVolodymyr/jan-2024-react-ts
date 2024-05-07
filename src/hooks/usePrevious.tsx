// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

import { useRef } from 'react';

export const usePrevious = <T,> (value: T) => {
    const previousRef = useRef<T>();
    const currentRef = useRef<T>(value);

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }

    return previousRef.current;
}
