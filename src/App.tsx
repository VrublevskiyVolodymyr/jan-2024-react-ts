import {FC, MouseEventHandler, useState} from 'react';

import './App.css';
import {useToggle} from "./hooks/useToggle";
import {usePrevious} from "./hooks/usePrevious";
import {useStorage} from "./hooks/useStorage";


interface IProps {

}

const App: FC<IProps> = () => {
    const [isToggled, toggle] = useToggle(false);

    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);

    const [name, setName] = useStorage<string>('name', 'John') as any;

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value as string;
        setName(newName);
    };





    return (
        <div>
            <button onClick={toggle as MouseEventHandler<HTMLButtonElement>}> Toggle</button>
            {isToggled && <p>Toggle is on!</p>}

            <hr/>

            <p>Current count: {count}</p>
            <p>Previous count: {previousCount !== undefined ? previousCount : 'N/A'}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <hr/>

            <input
                type="text"
                onChange={handleNameChange}
            />
            <div>
                <p> Hello, {name}!</p>
            </div>

        </div>
    );
};
export {App};
