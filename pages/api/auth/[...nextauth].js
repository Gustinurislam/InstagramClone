import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
// Configure one or more authentication providers

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});
