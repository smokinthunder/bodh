import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import datas from "../../../../public/static/data/customer_order.json";

export default function DashboardOrderTable() {
  return (
    <div className="overflow-scroll h-[60vh]" >


    <Table >
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sl No.</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>No. of Products</TableHead>
          <TableHead>Product Types</TableHead>
          <TableHead>Quantity of Products</TableHead>
          <TableHead>Total Items</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {datas.map((data) => (
          <TableRow key={data.userid}>
            <TableCell className="font-medium">{data.userid}</TableCell>
            <TableCell className='flex flex-col' > <p> {data.username}</p> <p>{data.phone_number}</p><p className="text-slate-500" > {data.email}</p></TableCell>
            <TableCell>{data.address}</TableCell>
            <TableCell>{data.number_of_products_purchased}</TableCell> 
            <TableCell > {data['products_purchased'].map((product)=> ( <p key={product.product_name} >{product.product_name}</p> )  )} </TableCell>
            <TableCell>{data['products_purchased'].map((product)=> ( <p key={product.product_name} >{product.quantity}</p> )  )} </TableCell>
            <TableCell>{data.total_items}</TableCell>
            <TableCell className="text-right">{data.total_price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
