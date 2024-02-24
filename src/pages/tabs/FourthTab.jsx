import React from "react";
import CustomCardWithHeadingAndSubHeading from "../../components/CustomCardWithHeadingAndSubHeading";
import { permissionList } from "../../dummy";

const FourthTab = ({ values, handleChange, setFieldValue, errors }) => {
  const { permission } = values;
  return (
    <div className="min-h-[60dvh] h-full">
      <CustomCardWithHeadingAndSubHeading
        headingText={"Who can manage projects"}
        subHeadingText={
          "Don't panic - You can also customize this permissions in settings"
        }
      >
        <div className="grid grid-cols-1 gap-2 w-full">
          {permissionList.map((prem) => (
            <div className="flex col-span-1 gap-4 w-full ">
              <label className="text-center w-full">
                <input
                  className="custom-radio"
                  type="radio"
                  name="permission"
                  value={prem?.value}
                  checked={permission === prem.value}
                  onChange={handleChange}
                />
                <div className=" flex items-center  p-2 py-3 w-full border rounded-lg">
                  <span className="mr-2">{prem?.icon}</span>
                  <div className="flex flex-col h-full items-start">
                    <p className="text-sm font-medium mb-1">{prem?.title}</p>
                    <p className="text-xs text-gray-300 mb-2">
                      {prem?.description}
                    </p>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </CustomCardWithHeadingAndSubHeading>
    </div>
  );
};

export default FourthTab;
