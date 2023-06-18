import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = ({
    // Configure one or more authentication providers
    providers: [
      CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
        //   credentials: {
        //     email: { label: "Email", type: "email", placeholder: "jsmith@inventory.com" },
        //     password: { label: "Password", type: "password" }
        //   },
          async authorize(credentials, req) {
              const { password, email } = credentials;
              console.log("credentials:", credentials);
              const res = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  // username: credentials?.username,
                  email: email,
                  password: password,
                }),
              });
      
              const user = await res.json();
      
              console.log({ user });
      
              if (res.ok && user) {
                return user;
              } else return null;
          }
        })
      // ...add more providers here
    ],
    
    session: {
      strategy: "jwt"
    },
  
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.user = token;
  
        return session;
      },
    },
  
    pages: {
      signIn: '/auth/login',
    },
  })

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


