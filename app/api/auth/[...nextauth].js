import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../models/User";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import db from "../../../utils/db";

// Connect to the database
db.connectDb(); 

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  callbacks: {
    async session({ session, token }) {
      let user = await User.findById(token.sub);
      session.user.id = token.sub || user._id.toSting();
      // When creating a profile with Google, we need to provide a user role by default
      // if we want to implement roles, as it is not given by default
      session.user.role = user.role || "user";
      token.role = user.role || "user";
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
});
