import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { API_URL } from "@/config/config";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "try 'test'",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "try 'test'",
        },
      },

      async authorize(credentials) {
        //   const user = {
        //     id: 1,
        //     username: "test",
        //     password: "test",
        //   };
        //   if (
        //     credentials.username === user.username &&
        //     credentials.password === user.password
        //   ) {
        //     return user;
        //   }
        //   // Return null if user data could not be retrieved
        //   return null;
        // },

        const res = await fetch(`${API_URL}/api/user`, {
          method: "POST",
          body: JSON.stringify({ credentials }),
          headers: { "Content-Type": "application/json" },
          // Authorization: `Bearer ${getSession.a}`,
        });
        const user = await res.json();
        console.log(user);

        // If no error and we have user data, return it
        if (user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
