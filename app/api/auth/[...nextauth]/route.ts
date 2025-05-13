import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './options';

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
