import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";

const handler = NextAuth({
    providers: [
        AzureADProvider({
            clientId: process.env.AZURE_CLIENT_ID ?? "",
            clientSecret: process.env.AZURE_CLIENT_SECRET ?? "",
            tenantId: process.env.AZURE_TENANT_ID,
        }),
    ],
    pages: {
        signIn: '/sign-in',
        signOut: '/sign-out',
        error: '/error', // Error code passed in query string as ?error=
    },
})

export { handler as GET, handler as POST }