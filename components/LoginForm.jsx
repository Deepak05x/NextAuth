import React from "react";
import { doLogin } from "@/app/actions";

const LoginForm = () => {
    return (
        <form className="flex gap-12" action={doLogin}>
            <button type="submit" name="action" value="google" className="bg-black text-white px-12 py-8 text-lg rounded-lg">
                Sign In With Google
            </button>
            <button type="submit" name="action" value="github" className="bg-black text-white px-12 py-8 text-lg rounded-lg">
                Sign In With Github
            </button>
        </form>
    );
};

export default LoginForm;
