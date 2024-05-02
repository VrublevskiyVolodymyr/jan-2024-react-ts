import {FC, useState} from 'react';

import './App.css';
import {Users} from "./components/users/Users";
import {IPost} from "./interfaces/post.interface";
import {postService} from "./services/post.service";
import {Posts} from "./components/posts/Posts";


interface IProps {

}

const App: FC<IProps> = () => {

    const [posts, setPosts] = useState<IPost[]>([]);


    const showPosts = (userId: number) => {
        postService.getAllPostsByUserId(userId).then(({data}) => {
            setPosts(data.posts);
        })
    }
    return (
        <div className="App">
            <div className={'users'}><Users showPosts={showPosts}/></div>
            <div className={'posts'}><Posts posts={posts}/></div>
        </div>
    );
};

export {App};
