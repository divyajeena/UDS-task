import React, { useState } from "react";

const InputField = ({
  label,
  placeholder,
  helperText,
  error,
  disabled,
  loading,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable,
  className = "",
}) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const baseStyles =
    "w-full rounded-xl border transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 dark:text-gray-100 dark:placeholder-gray-400";

  const variants = {
    filled: "bg-gray-100 border-transparent focus:ring-blue-500 dark:bg-gray-800",
    outlined:
      "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600",
    ghost: "bg-transparent border-transparent focus:ring-blue-500 dark:bg-transparent",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={type === "password" && !showPassword ? "password" : "text"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
            error ? "border-red-500 focus:ring-red-500" : ""
          }`}
        />

        {/* Clear button */}
        {clearable && value && !disabled && (
          <button
            type="button"
            onClick={() => setValue("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ✕
          </button>
        )}

        {/* Password toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}

        {/* Loading spinner */}
        {loading && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500"></div>
          </div>
        )}
      </div>

      {/* Helper / error text */}
      {error ? (
        <p className="text-sm text-red-500 dark:text-red-300">{error}</p>
      ) : helperText ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      ) : null}
    </div>
  );
};

export default InputField;
