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
              // console.log("credentials:", credentials);

              const user = {
                email: email,
                password: password,
            };
            
            const requestBody = {
                user: user
            };

              const res = await fetch("http://localhost:4000/api/v1/auth/login", {
                // credentials: 'include',
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
              });

              const token = res.headers.get("Authorization");
              console.log("user: token:", token);

              const results = await res.json();
              console.log("user: rails:", results);
      
              if (res.ok && user) {
                return user;
              } else return null;

              // return user;
              // return { name: "my name"}
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
  
    // pages: {
    //   signIn: '/auth/login',
    // },
    pages: {
      signIn: '/auth/login',
      signOut: '/auth/signout',
      error: '/auth/error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
  })

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


