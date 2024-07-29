import { signIn } from "next-auth/react";
import ClientComponent from "../ClientLayout";

const SignInAuth = () => {
  return (
    <ClientComponent>
      <h1>Sign In</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </ClientComponent>
  );
};

export default SignInAuth;
