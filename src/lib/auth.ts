import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { prismaClient } from "./prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient) as Adapter,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
    signOut: "/",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("fire signin Callback");
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("fire redirect Callback");
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log("fire SESSION Callback");
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("fire jwt Callback");
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
