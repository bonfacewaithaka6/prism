"use client";

import { useSession } from "next-auth/react";
import UserInfo from "../components/userInfo";

const ClientComponent = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? <UserInfo /> : <p>Please sign in.</p>}
      {children}
    </div>
  );
};

export default ClientComponent;
