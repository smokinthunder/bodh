
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginCard from "@/app/Auth/User/components/login_card";
import SignUpCard from "./components/signup_card";

export default function AuthUser() {
  return (
    <div className="columns-2 gap-0 h-screen w-screen">
      <div className="  h-screen  flex justify-center items-center">
        <img
          src={"/assets/AuthPage/bodi-logo.png"}
          className="absolute left-0 top-0 h-20 "
        />
        <Tabs defaultValue="login" className="w-[400px] flex flex-col items-center   ">
          <TabsList >
            <TabsTrigger className="rounded-l-2xl" value="login">Login</TabsTrigger>
            <TabsTrigger className="rounded-r-2xl" value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginCard />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpCard />
          </TabsContent>
        </Tabs>
      </div>
      <div className=" h-screen">
        <Image
          src={"/assets/AuthPage/login_side_image.jpeg"}
          className="h-screen w-full"
          height={1024}
          width={720}
          alt="NO"
        />
      </div>
    </div>
  );
}
