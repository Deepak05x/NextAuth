import React from "react";
import { doLogOut } from "@/app/actions";

const LogoutForm = () => {
    return (
        <form action={doLogOut}>
            <button className="bg-black text-white px-12 py-8 text-lg rounded-lg" type="submit">
                Sign Out
            </button>
        </form>
    );
};

export default LogoutForm;
