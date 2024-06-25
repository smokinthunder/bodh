"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, id, value,onChange, ...props }, ref) => {
  const [show, setShow] = useState("password");
  // var show = "password";
  // function setShow (value)  {
  //   show = value;
  // };

  return (
    <div
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      <input
        className="outline-none w-full"
        type={((id === "password")||(id === "cpassword")) ? show : type}
        value={value}
        onChange={onChange}
        ref={ref}
        {...props}
      />
      {((id === "password")||(id === "cpassword")) && show === "text" && (
        <button
          onClick={()=>setShow("password")}
          type="button"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ml-1"
        >
          <EyeOff size={20} />
        </button>
      )}
      {((id === "password")||(id === "cpassword")) && show === "password" && (
        <button
          onClick={()=>setShow("text")}
          type="button"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ml-1"
        >
          <Eye size={20} />
        </button>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
