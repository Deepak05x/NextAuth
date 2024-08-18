import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

const Homepage = async () => {
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }

    return (
        <div className="min-h-screen flex-col flex items-center justify-center gap-12">
            <h1 className="text-3xl">{session?.user?.name}</h1>
            <Image src={session?.user?.image} alt="image" width={70} height={70} className="rounded-full " />
            <button>Sign Out</button>
        </div>
    );
};

export default Homepage;
