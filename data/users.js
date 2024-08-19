const users = [
    {
        email: "hdeepak5902@gmail.com",
        password: "password"
    },
    {
        email: "alex@gmail.com",
        password: "password"
    },
    {
        email: "john@gmail.com",
        password: "password"
    },
]

export const getUserByEmail = (email)=>{
    const found = users.find(user=> user.email === email)
    return found
}