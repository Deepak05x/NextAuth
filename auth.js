import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { User } from "./models/User"
import connectDB from "./lib/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentails',

      credentials:{
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "passwrod" },
      },

      authorize: async(credentials)=>{
        const email = credentials.email
        const password = credentials.password

      if(!email || !password){
        throw new CredentialsSignin("Please provide email and password")

      }

      await connectDB()

      const user  = await User.findOne({email}).select("password +role")

      if(!user){
        throw new Error("Invalid Password or Email")
      }

      if(!user.password){
        throw new Error
      }

      }
    })
  ],
})