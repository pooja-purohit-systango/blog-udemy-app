// types/next-auth.d.ts or src/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string;
      firstName?: string;
      lastName?: string;
    };
    accessToken?: string;
  }

  interface User {
    username?: string;
    firstName?: string;
    lastName?: string;
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
  }
}
