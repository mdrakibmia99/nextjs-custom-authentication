import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

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
            src={session?.user?.image as string}
            className="mx-auto rounded-full"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
