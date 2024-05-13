import {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import css from './post.module.css';
import {IPost} from "../interfaces";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators";
import {postService} from "../services";

interface IProps {

}

const PostForm: FC<IProps> = () => {

    const [post, setPost] = useState<IPost | null>(null);

    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm<IPost>(
        {
            mode: 'all',
            resolver: joiResolver(postValidator)
        });

    const create: SubmitHandler<IPost> = async (data) => {
        const postData = await postService.createPost(data);
        reset();
        setPost(postData.data);
        console.log(post);
    }


    function handleClose() {
        setPost(null)
    }

    return (
        <div className={css.modalBackground}>
            <div className={css.postForm}>
                <form onSubmit={handleSubmit(create)} className={css.form}>
                    <div className={css.formGroup}>
                        <label>UserId</label>
                        <input className={css.form_control} type="text"
                               placeholder={'UserId'} {...register('userId', {required: true})} />
                        {errors.userId && <span>{errors.userId.message}</span>}
                    </div>

                    <div className={css.formGroup}>
                        <label>Title</label>
                        <input className={css.form_control} type="text"
                               placeholder={'Title'} {...register('title', {required: true})} />
                        {errors.title && <span>{errors.title.message}</span>}
                    </div>

                    <div className={css.formGroup}>
                        <label>Body</label>
                        <input className={css.form_control} type="text"
                               placeholder={'Body'} {...register('body', {required: true})} />
                        {errors.body && <span>{errors.body.message}</span>}
                    </div>

                    <div className={css.buttonContainer}>
                        <button className={css.button} type="submit" disabled={!isValid}>CREATE</button>
                    </div>
                </form>
            </div>
            {post && (
                <div className={css.post}>
                    <h2>Saved post</h2>
                    <p>UserId: {post.userId}</p>
                    <p>Id: {post.id}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    <button className={css.button} onClick={handleClose}>CLOSE</button>
                </div>
            )}
        </div>
    );
};

export {PostForm};