"use client";
import { React, useState } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginCard() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Card className="flex flex-col items-center p-6">
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 mb-6">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.currentTarget.value);
            }}
            required
          />
        </div>
        <div className="grid gap-2 mb-6">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            required
          ></Input>
        </div>
        <Button className="w-full" onClick={()=>{console.log(phone+","+password)}}>Continue</Button>
        <p className="text-xs text-muted-foreground  mb-6 mt-4">
          By Continuing you agree to our{" "}
          <a href="#" className="underline underline-offset-1 ">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-1">
            Privacy Policy
          </a>
        </p>
        <p className="text-xs text-muted-foreground flex justify-center mt-14 ">
          Or Sign up with
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col  ">
          <div className="flex flex-row justify-between gap-4 mb-12">
            <Image
              src={"/assets/AuthPage/Facebook.png"}
              alt="Facebook"
              width={50}
              height={50}
            />
            <Image
              src={"/assets/AuthPage/Instagram.png"}
              alt="Instagram"
              width={50}
              height={50}
            />
            <Image
              src={"/assets/AuthPage/Twitter.png"}
              alt="Twitter"
              width={50}
              height={50}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
