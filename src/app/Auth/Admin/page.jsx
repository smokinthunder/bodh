import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginCard from "./components/login_card";
import SignUpCard from "./components/signup_card";
import Link from "next/link";

export default function AuthUser() {

  

  return (
    <div className="columns-2 gap-0 h-screen w-screen">
      <div className="  h-screen  flex justify-center items-center">
        <Link href={"../../"}>
          <img
            src={"/assets/AuthPage/bodi-logo.png"}
            className="absolute left-0 top-0 h-20 "
          />
        </Link>
        <Tabs
          defaultValue="login"
          className="w-[400px] flex flex-col items-center   "
        >
          <TabsList>
            <TabsTrigger className="rounded-l-2xl" value="login">
              Login
            </TabsTrigger>
            <TabsTrigger className="rounded-r-2xl" value="signup">
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginCard />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpCard />
          </TabsContent>
        </Tabs>
      </div>
      <div
        className=" h-screen bg-[#E9926C] flex flex-col items-center justify-center"
      >
        <p className="text-6xl p-5 font-mono text-white font-bold ">Welcome Admin</p>
        <Image
          src={"/assets/AuthPage/Admin/Admin-side-Image.png"}
          className="mx-auto"
          height={450}
          width={465}
          alt="NO"
        />
      </div>
    </div>
  );
}
