import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "kminchelle" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });

          const data = await res.json();
          console.log(data) ; 

          if (!res.ok || !data.accessToken) {
            throw new Error('Invalid credentials');
          }

          const user = {
            id: data?.user?.id,
            email: data?.email,
            token: data.token,
            username: data?.username, 
            firstName: data?.firstName, 
            lastName: data?.lastName 
          };

          return user;
        } catch (error) {
          console.error('Login error:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,

 // In your authConfig
callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.accessToken = user.token;
      token.username = user.username;
      token.firstName = user.firstName;
      token.lastName = user.lastName;
    }
    return token;
  },
  async session({ session, token}) {
    session.accessToken = token.accessToken;
    session.user.username = token.username;
    session.user.firstName = token.firstName;
    session.user.lastName = token.lastName;
    return session;
  },
}
};
