// Table.js
import React from 'react';

const Table = ({ children, className }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full bg-white border border-gray-200">
        {children}
      </table>
    </div>
  );
};

const TableHead = ({ children }) => {
  return (
    <thead className="bg-white p-3 ">
      {children}
    </thead>
  );
};

const TableHeader = ({ children }) => {
  return (
    <tr>
      {children}
    </tr>
  );
};

const TableBody = ({ children }) => {
  return (
    <tbody>
      {children}
    </tbody>
  );
};

const TableRow = ({ children }) => {
  return (
    <tr className="border-b hover:bg-gray-50 flex items-start justify-between w-full cursor-pointer">
      {children}
    </tr>
  );
};

const TableCell = ({ children, isHeader = false }) => {
  const cellClass = isHeader ? "px-4 py-2 font-semibold text-gray-700" : "px-4 py-2 text-gray-600 flex items-center justify-between";
  return (
    <td className={cellClass}>
      {children}
    </td>
  );
};

Table.Head = TableHead;
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
