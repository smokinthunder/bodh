"use client";

import { ApiUrl } from "@/Constants/Api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ProfileAvatar() {
  const token = Cookies.get("token");
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ensure this runs only on the client

    const fetchUserData = async () => {
      if (!token) {
        setError("Token not found");
        console.log("Token not found");
        return;
      }

      axios({
        method: "get",
        url: ApiUrl + "api/auth/me",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log("USER DATA");
          console.log(response.data["name"][0]);
          setName(response.data["name"]);
        })
        .catch(function (error) {
          console.log("DATA NOT FOUND");
          console.error(error);
        });
    };

    fetchUserData();
  }, []);

  if (error) {
    return (
      <div>
        <Avatar className="bg-gray-600 ">
          <AvatarFallback className="text-white  text-2xl">!</AvatarFallback>
        </Avatar>
      </div>
    );
  }

  if (!name) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="bg-gray-600 ">
            <AvatarFallback className="text-white  text-2xl">
              {name ? name[0] : "!"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => {
                Cookies.remove("token");
                window.location.reload();
              }}
            >
              Logout
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
