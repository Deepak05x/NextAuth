"use client";

import React from "react";
import SocialLogin from "./SocialLogin";
import { doCredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const response = await doCredentialLogin(formData);

        if (!!response.error) {
        } else {
            router.push("/home");
        }
    };

    return (
        <div className="flex flex-col gap-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-12 items-center">
                <div>
                    <label htmlFor="">Enter your email</label>
                    <input type="email" name="email" id="email" className="border-black border py-4 px-12" />
                </div>
                <div>
                    <label htmlFor="">Enter your password</label>
                    <input type="password" name="password" id="password" className="border-black border py-4 px-12" />
                </div>
                <button className="bg-black px-12 py-8 text-white">Login</button>
            </form>
            <SocialLogin />
        </div>
    );
};

export default LoginForm;
