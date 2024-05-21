import React, {FC, useEffect, useState} from 'react';

import {IComment} from "../../interfaces";
import {Comment} from "../Comment/Comment";
import {commentService} from "../../services/comment.service";

interface IProps {

}
type IPropsType = IProps & { children?: React.ReactNode };

const Comments: FC<IPropsType> = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAllComments().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            {comments && comments.map(comment=> <Comment key={comment.id} comment={comment}/>) }
        </div>
    );
};

export {Comments};