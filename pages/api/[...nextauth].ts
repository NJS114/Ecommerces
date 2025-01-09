import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthService } from '@/api/api_auth';



const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Email or password missing');
        }

        try {
          const authService = new AuthService();
          // Passez les credentials comme paramètres à la méthode login
          const response = await authService.login({
            email: credentials.email,
            password: credentials.password,
          });

          if (response && response.token) {
            return {
              id: response.user.id,
              login: response.user.login,
              right: response.user.right,
              email: response.user.email,
              token: response.token,
            };  // Return a User-like object
          } else {
            throw new Error('Invalid credentials');
          }
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.login = user.login;
        token.email = user.email;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = {
          id: token.id,
          name:token.name,
          right:token.right,
          login: token.login,
          email: token.email,
          token: token.token,
        };
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
