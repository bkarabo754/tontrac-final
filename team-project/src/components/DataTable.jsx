// src/components/DataTable.js
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DataTable = ({ users, onRowDoubleClick }) => {
  return (
    <Table className="min-w-full bg-white shadow-2xl rounded-lg overflow-hidden">
      <TableCaption className="text-lg font-semibold mb-4 text-text ">
        A list of users
      </TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="px-6 py-3">Full Name</TableHead>
          <TableHead className="px-6 py-3">Email</TableHead>
          <TableHead className="px-6 py-3">Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Iterate over users and create a row for each */}
        {users.map((user, index) => (
          <TableRow
            key={index}
            onDoubleClick={() => onRowDoubleClick(user)}
            className="hover:bg-gray-200 cursor-pointer"
          >
            <TableCell className="px-6 py-4 font-medium">{`${user.name.title} ${user.name.first} ${user.name.last}`}</TableCell>
            <TableCell className="px-6 py-4">{user.email}</TableCell>
            <TableCell className="px-6 py-4">{`${user.location.city}, ${user.location.country}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-gray-100">
          <TableCell className="px-6 py-4 font-semibold" colSpan={2}>
            Total Users
          </TableCell>
          <TableCell className="px-6 py-4 text-right font-semibold">
            {users.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default DataTable;
