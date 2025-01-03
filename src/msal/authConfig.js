// const CLIENT_ID = "...";
// const TENANT_ID = "...";

export const API_SCOPE = "api://"+process.env.AZURE_CLIENT_ID+"/Employees.Read.All";

export const msalConfig = {
    auth: {
        clientId: process.env.AZURE_CLIENT_ID ?? "",
        authority: "https://login.microsoftonline.com/"+process.env.AZURE_TENANT_ID,
        redirectUri: "/dashboard",
        postLogoutRedirectUri: "/auth/signin",
        scope: API_SCOPE,
        domain: "cumlaudeai.onmicrosoft.com",
    },
    cache: {// Optional
        cacheLocation: 'localStorage',  // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false,  // Set this to "true" if you are having issues on IE11 or Edge
    },
};

export const loginRequest = {
    scopes: [API_SCOPE]
};

export const userDataLoginRequest = {
    scopes: ["user.read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};