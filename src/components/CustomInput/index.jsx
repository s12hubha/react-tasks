import React, { useState } from "react";

const CustomInput = ({
  labelText,
  subLabelText,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <div>
      {labelText && (
        <p htmlFor={name} className="font-medium text-gray-800 text-sm mb-2">
          {labelText}
        </p>
      )}
      {subLabelText && (
        <p className="text-xs my-2 text-gray-300">{subLabelText}</p>
      )}
      <div
        className={`border flex focus:ring-blue-400 w-full  rounded-lg ${
          focus ? "border-blue-400 border-2" : ""
        }    dark:focus:ring-blue-400 dark:focus:border-blue-400 `}
      >
        {Icon ? (
          <span className="ml-1 bg-membio-accent-200  px-1 py-2 grid place-items-center">
            {Icon}
          </span>
        ) : null}
        <input
          className="bg-membio-accent-200 border-none outline-none w-full text-gray-900 text-sm p-2.5 py-2 "
          name={name}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomInput;
