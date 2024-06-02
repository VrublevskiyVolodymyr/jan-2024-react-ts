const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const auth = '/auth'
const cars = '/cars'
const users = '/users'

const urls = {
    auth: {
        login: auth,
        register: users,
        refresh:`${auth}/refresh`,
        me: `${auth}/me`
    },
    cars: {
        base: cars,
        byId: (id:string) => `${cars}/${id}`
    },
    users:'/users'
}

export {
    baseURL,
    urls
}