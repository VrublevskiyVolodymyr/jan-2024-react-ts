import {FC} from 'react';

import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {UsersPage} from "./pages/UsersPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage/PostsPage";
import {HomePage} from "./pages/HomePage";
import {ErrorPage} from "./pages/ErrorPage";
import {UserPostsPage} from "./pages/UserPostsPage";
import {PostCommentsPage} from "./pages/PostCommentsPage";


interface IProps {

}

const App: FC<IProps> = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>} errorElement={<ErrorPage/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'users/:id/posts'} element={<UserPostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'posts/:id/comments'} element={<PostCommentsPage/>}/>

                <Route path="*" element={<ErrorPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};
