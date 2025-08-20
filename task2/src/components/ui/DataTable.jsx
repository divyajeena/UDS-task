import React, { useState } from "react";

const DataTable = ({
  columns,
  data,
  loading = false,
  selectable = "multiple", // "single" | "multiple" | false
}) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  // Sort handler
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    const { key, direction } = sortConfig;
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  // Selection handler
  const handleRowClick = (row) => {
    if (!selectable) return;
    if (selectable === "single") {
      setSelectedRows([row]);
    } else {
      setSelectedRows((prev) =>
        prev.includes(row) ? prev.filter((r) => r !== row) : [...prev, row]
      );
    }
  };

  // Column sorting handler
  const handleSort = (key) => {
    if (sortConfig?.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  };

  // Empty state
  if (!loading && data.length === 0) {
    return (
      <div className="flex items-center justify-center p-6 text-gray-500 dark:text-gray-400">
        No data available
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="cursor-pointer px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                onClick={() => handleSort(col.key)}
              >
                {col.label}
                {sortConfig?.key === col.key && (
                  <span className="ml-1">
                    {sortConfig.direction === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-500 dark:text-gray-400"
              >
                Loading...
              </td>
            </tr>
          ) : (
            sortedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => handleRowClick(row)}
                className={`cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedRows.includes(row) ? "bg-blue-100 dark:bg-blue-900" : ""
                }`}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
