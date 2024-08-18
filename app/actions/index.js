"use server"

import { signIn } from "@/auth"
import { signOut } from "@/auth"

export async function doLogin(formData){
    const action = formData.get('action')
    await signIn(action, {redirectTo : "/home"})   
}


export async function doLogout(formData){
    
}