import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // ...add more providers here
  ],
  // pages: {
  //   signIn: "/signin",
  // },
  callbacks: {
    async signIn({ account, profile }: any) {
      // console.log("****************************************");
      // console.log("Google signIn callback");
      // console.log({ account, profile });
      // console.log("****************************************");
      if (account.provider === "google") {
        return (
          profile.email_verified &&
          profile.email === "molinari.pablo81@gmail.com"
        );
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
