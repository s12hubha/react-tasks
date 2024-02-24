import React from "react";

const CustomLabelBox = ({
  name,
  labelText,
  subLabelText,
  children,
  customClass,
}) => {
  return (
    <div className={customClass}>
      <label htmlFor={name} className="font-medium text-gray-800 text-sm">
        {labelText}
      </label>
      {subLabelText && (
        <p className="text-xs my-2 text-gray-300">{subLabelText}</p>
      )}
      <div className="mt-2 w-full">{children}</div>
    </div>
  );
};

export default CustomLabelBox;
