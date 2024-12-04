"use client";

import { handleLogin } from "@/msal/msal";

import type { ClientSafeProvider } from "next-auth/react";
import Image from "next/image";

const Icon = ({ provider }: { provider: string }) => {
    let imagePath = "";
    
    if (provider === "Google") {
      imagePath = "/assets/icons/google.svg";
    } else if (provider === "Azure Active Directory") {
      imagePath = "/assets/icons/microsoft_logo.svg";
    } else {
      imagePath = "/assets/icons/discord.svg";
    }
  
    return (
      <Image
        src={imagePath}
        width="25"
        height="25"
        alt="Google"
        className="mr-4"
      />
    );
  };
  
  export default function LoginButton({ auth }: { auth?: ClientSafeProvider }) {
    const providerName = auth?.name === "Azure Active Directory" ? "Microsoft" : auth?.name;

    return (
      <button
        type="button"
        className="border shadow-1 rounded-md py-3 px-6 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => handleLogin("redirect")}
      >
        {auth ? (
          <div className="flex items-center">
            <Icon provider={auth.name} />
            <p className=" text-center w-full h-full">Sign In with {providerName}</p>
          </div>
        ) : (
          "Custom Login Page"
        )}
      </button>
    );
  }