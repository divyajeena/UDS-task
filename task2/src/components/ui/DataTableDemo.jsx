import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
];

const initialData = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

const DataTableDemo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate API fetch
  useEffect(() => {
    setTimeout(() => {
      setData(initialData);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 dark:bg-gray-900">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
        DataTable Demo
      </h1>

      <DataTable
        columns={columns}
        data={data}
        loading={loading}
        selectable="multiple" // change to "single" or false
      />
    </div>
  );
};

export default DataTableDemo;
