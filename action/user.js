"use server"

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import {hash} from "bcryptjs"

export const register = async (formData) => {
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');


    if(!firstName || !lastName || !email || !password){
        throw new Error("Fill all the fields")
    }

    await connectDB()

    const existingUser = await User.findOne({email});
    
    if(existingUser) throw new Error("User Already Exist")

    const hashedPassword = await hash(password, 12)

    await User.create({firstName, lastName, email, password : hashedPassword})
    redirect('/login')
};