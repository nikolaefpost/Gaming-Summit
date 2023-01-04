import React from "react";

// import NextAuth from "next-auth";
// import CredentialProvider from "next-auth/providers/credentials";
//
// // import GithubProvider from "next-auth/providers/github";
//
// export default NextAuth({
//   providers: [
//     CredentialProvider({
//       name: "credentials",
//       credentials: {
//         username: { label: "Name", type: "text", placeholder: "Your name" },
//         password: { label: "Password", type: "password", placeholder: "" },
//       },
//       authorize: (credentials) => {
//         if (
//           credentials?.username === "Likesports" &&
//           credentials?.password === "Conveyour2023"
//         ) {
//           return {
//             id: 0,
//             name: "Alex",
//           };
//         }
//
//         return {
//           id: 0,
//           name: credentials?.username,
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     jwt: async ({ token, user }) => {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     session: ({ session, token }) => {
//       if (token) {
//         session.id = token.id;
//       }
//       return session;
//     },
//   },
//   secret: "test",
//   jwt: {
//     secret: "test",
//     // encryption: true,
//   },
// });

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID || "",
//       clientSecret: process.env.GITHUB_SECRET || "",
//     }),
//     // ...add more providers here
//   ],
//   callbacks: {
//     async jwt({ token, account }) {
//       // Persist the OAuth access_token to the token right after signin
//       if (account) {
//         token.accessToken = account.access_token
//       }
//       return token
//     },
//     async session({ session, token, user }) {
//       // Send properties to the client, like an access_token from a provider.
//       session.accessToken = token.accessToken
//       return session
//     }
//   }
// })
