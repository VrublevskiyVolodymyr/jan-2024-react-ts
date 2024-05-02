const baseURL = "https://dummyjson.com"

const users = "/users"
const posts = "/posts/user"


const urls = {
    users: users,
    posts:(id:number):string => `${posts}/${id}`
}

export {baseURL, urls}