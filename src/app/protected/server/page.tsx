import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/protected/server");
  }

  return (
    <div>
      <h2>Protected Server Side Page</h2>
      <h3>Session: {session?.user?.name}</h3>
    </div>
  );
};

export default ProtectedServerPage;
