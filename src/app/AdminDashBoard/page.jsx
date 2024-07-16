import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import DashboardOrderTable from "./components/DashboardOrderTable";

export default function AdminDashBoard() {

  

  return (
    <div className="bg-[#FFECCF] h-svh w-svw px-20 py-7">
      <p className="text-3xl font-semibold  ml-7 mb-2 ">Admin Panel</p>
      <div className="w-full min-h-96  bg-white rounded-3xl flex flex-col p-6 ">
        <div className="flex flex-row items-end justify-center ">
          <Image
            className="mr-40 my-2"
            src="/assets/AdminDashBoard/smallGraph.png"
            width={200}
            height={200}
          />
          <div className="bg-[#F65858] flex flex-col p-5 rounded-3xl h-min border-r-8 border-t-8 m-2 ">
            <p className="text-lg text-white font-semibold ">Total Sales</p>
            <p className="text-4xl text-white font-semibold ">09</p>
          </div>
          <div className="bg-[#29CB97] flex flex-col p-5 rounded-3xl h-min border-r-8 border-t-8 m-2 ">
            <p className="text-lg text-white font-semibold ">New Orders</p>
            <p className="text-4xl text-white font-semibold ">02</p>
          </div>
          <div className="bg-[#6B2B58] flex flex-col p-5 rounded-3xl h-min border-r-8 border-t-8 m-2 ">
            <p className="text-lg text-white font-semibold ">Canceled Orders</p>
            <p className="text-4xl text-white font-semibold ">02</p>
          </div>
          <div className="bg-[#3870FF] flex flex-col p-5 rounded-3xl h-min border-r-8 border-t-8 m-2 ">
            <p className="text-lg text-white font-semibold ">
              Orders Delivered
            </p>
            <p className="text-4xl text-white font-semibold ">01</p>
          </div>
        </div>
        <div className="flex flex-row justify-between p-5 ">
          <Button variant="outlined" className="border-2">
            {" "}
            Filters{" "}
          </Button>
            <Input placeholder="Search" className="w-1/4"/> 
        </div>
        <DashboardOrderTable />
      </div>
    </div>
  );
}
// public/assets/AdminDashBoard/smallGraph.png
// /home/antesh/Desktop/bodhi-creations-frontend/public/assets/AdminDashBoard/smallGraph.png
