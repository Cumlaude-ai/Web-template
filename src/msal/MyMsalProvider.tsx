'use client'

import { useEffect } from "react";
import { initializeMsal, msalInstance } from "@/msal/msal";
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react"
import UnauthorizedMessage from "@/components/UnauthorizedMessage";
import { getProviders } from "@/utils/Helpers";

export default function MyMsalProvider({ children, providers }: { children: React.ReactNode, providers: ReturnType<typeof getProviders> }) {
    useEffect(() => {
        initializeMsal();
    }, []);

    return (
        <MsalProvider instance={msalInstance}>
            <AuthenticatedTemplate>
                {children}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <UnauthorizedMessage providers={providers}/>
            </UnauthenticatedTemplate>
        </MsalProvider>
    );
};