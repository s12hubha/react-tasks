import React, { useState } from "react";
import DatePicker from "react-datepicker";
const CustomDatePicker = ({ name, value, handleChange, handleDateSelect }) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="w-full">
      <div
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`relative w-full border flex items-center rounded ${
          focus && "border-blue-400 border-2"
        }`}
      >
        <div className="relative inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <DatePicker
          name={name}
          type={"date"}
          dateFormat="dd-MMM-yyyy"
          className="w-full outline-none border-none ml-2 text-xs py-2"
          selected={(value && new Date(value)) || null}
          onSelect={handleDateSelect} //when day is clicked
          onChange={handleChange} //only when value has changed
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
