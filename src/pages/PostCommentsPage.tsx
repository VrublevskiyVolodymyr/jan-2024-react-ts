import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IComment} from "../interfaces";
import {userService} from "../services";
import {Comment} from "../components";

interface IProps {

}
type IPropsType = IProps & { children?: React.ReactNode };

const PostCommentsPage: FC<IPropsType> = () => {
    const {id: postId} = useParams();
    const [comments, setComments] = useState<IComment[]>([]);
    const history = () => window.history.back();

    useEffect(() => {
        postId && userService.getAllCommentsOfPost(+postId).then(({data}) => setComments(data))
    }, [postId]);
    return (
        <div key={postId}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            <button onClick={()=>history()}>Back</button>
        </div>
    );
};

export {PostCommentsPage};