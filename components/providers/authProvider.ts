import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Your own logic for dealing with plaintext password strings; be careful!
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import argon2 from 'argon2';
import client from "@/lib/mongoDb";

async function getUserFromDb(email: string, hashedPassword: string ) {
  console.error("For the Database", email, hashedPassword)
  try {
    const db = await client.db("photoGemma")
    console.log("first" , db)
    const user = await db.collection('users').findOne({ email: email });
    
    if(!user)

    console.log("last time", user)
    return user
  } catch (error) {
    return error
  }
}


declare module "next-auth" {
  interface User {
    username?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      
      authorize: async (credentials) => {
        let user = null
        //console.log("lolloo",credentials)
        // logic to salt and hash password
        const pwHash = await argon2.hash(credentials.password as string);
        console.log("user mail", credentials.email)
        console.log("hashed passwrd", pwHash)
 
        // logic to verify if the user exists
        user = await getUserFromDb(credentials.email as string, pwHash)
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }
 
        // return user object with their profile data
        return user
      },


    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
  
})