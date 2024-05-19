const baseURL = "https://jsonplaceholder.typicode.com"

const users = "/users"
const posts = "/posts"
const comments = "/comments"


const urls = {
    users: users,
    posts:posts,
    postsOfUser:(userId:number) => `users/${userId}/posts`,
    comments:comments,
    commentsOfPost:(postId:number) => `posts/${postId}/comments`,
}

export {baseURL, urls}