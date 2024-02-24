import React from "react";

const CustomCardWithHeadingAndSubHeading = ({
  children,
  headingText,
  subHeadingText,
  customClass,
}) => {
  return (
    <div className="bg-white w-full">
      <div className="w-full mx-auto text-center">
        <h3 className="text-base font-medium">{headingText}</h3>
        {subHeadingText && (
          <p className="text-gray-300 text-xs">{subHeadingText}</p>
        )}
      </div>
      <div className="p-2 px-3 mt-4">{children}</div>
    </div>
  );
};

export default CustomCardWithHeadingAndSubHeading;
