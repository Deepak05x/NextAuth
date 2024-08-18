import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"


export const {handlers: {GET, POST}, signIn, signOut, auth} = 
NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

            authorization: {
                params:{
                    prompt:"consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ]
})