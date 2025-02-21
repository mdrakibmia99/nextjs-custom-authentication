//md rakib mia 
// mern stact developer
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <p className="text-4xl text-center my-10">You are logged in as {session?.user?.email}</p>
          <Image
            alt="profileImage"
            width={100}
            height={100}
            src={session?.user?.image || "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"}
            className="mx-auto rounded-full"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
