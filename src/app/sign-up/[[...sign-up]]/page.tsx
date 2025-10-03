"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignInPage(){
    return(
        <div className="flex flex-row items-center justify-center min-h-screen">
            <div className=""></div>
            <div><SignUp/></div>
        </div>
    );
}