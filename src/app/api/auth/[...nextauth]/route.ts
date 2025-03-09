// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { username, password } = credentials;

        // قم بإضافة منطق التحقق من صحة بيانات تسجيل الدخول هنا
        const user = { id: 1, name: "John Smith", email: "jsmith@example.com" };

        if (username === "jsmith" && password === "password123") {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// تصدير دوال HTTP منفصلة
export const GET = (req: Request) => NextAuth(authOptions);
export const POST = (req: Request) => NextAuth(authOptions);