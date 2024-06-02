import {FC} from 'react';

interface IProps {
    page: string;
    prevNext: { prev: string | null, next: string | null };
    onPageChange: (page: string) => void;
}

const Pagination: FC<IProps> = ({ page, prevNext, onPageChange }) => {
    const prev = () => {
        onPageChange((+page - 1).toString());
    }

    const next = () => {
        onPageChange((+page + 1).toString());
    }

    return (
        <div>
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>
        </div>
    );
};

export {Pagination};