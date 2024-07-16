"use client";
import { React, useState } from "react";
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
import axios from "axios";


export default function SignUpCard() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  function handleSubmit() {
    const data = {name:username , phone: phone, password: password , confirmPass: cpassword };
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost:5000/api/auth/register",
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <Card className="flex flex-col items-center p-6">
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 mb-6">
          <Label htmlFor="phone">User Name</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.currentTarget.value);
            }}
            required
          />
        </div>{" "}
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
        <div className="grid gap-2 mb-6">
          <Label htmlFor="cpassword">Confirm Password</Label>
          <Input
            id="cpassword"
            type="password"
            value={cpassword}
            onChange={(e) => {
              setCpassword(e.currentTarget.value);
            }}
            required
          ></Input>
        </div>
        <Button className="w-full" onClick={handleSubmit} >Create Account</Button>
        <p className="text-xs text-muted-foreground  mt-4">
          By Continuing you agree to our{" "}
          <a href="#" className="underline underline-offset-1 ">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-1">
            Privacy Policy
          </a>
        </p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
