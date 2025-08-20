import React from "react";
import InputField from "./InputField";

const InputFieldDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 dark:bg-gray-900">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
        InputField Variations
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <InputField label="Name" placeholder="Enter your name" helperText="This is helper text" />

        <InputField label="Email" placeholder="Enter your email" error="Invalid email" />

        <InputField label="Password" placeholder="Enter password" type="password" clearable />

        <InputField label="Disabled" placeholder="Can't type" disabled />

        <InputField label="Loading" placeholder="Loading..." loading />

        <InputField label="Ghost Variant" variant="ghost" placeholder="Ghost style" />

        <InputField label="Filled Variant" variant="filled" placeholder="Filled style" />

        <InputField label="Large Size" size="lg" placeholder="Large input" />
      </div>
    </div>
  );
};

export default InputFieldDemo;
