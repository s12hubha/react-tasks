import React from "react";
import CustomLabelBox from "../../components/CustomLabelBox";
import CustomCardWithHeadingAndSubHeading from "../../components/CustomCardWithHeadingAndSubHeading";
import { CiViewList } from "react-icons/ci";
import { BsColumnsGap } from "react-icons/bs";
const ThirdTab = ({ values, handleChange, setFieldValue, errors }) => {
  const { test } = values;
  return (
    <div className="min-h-[60dvh] h-full">
      <CustomCardWithHeadingAndSubHeading
        headingText={"Select a View"}
        subHeadingText={"You can customize this views in settings"}
      >
        <div className="flex items-center justify-center gap-4 w-full ">
          <label className="text-center">
            <input
              className="custom-radio"
              type="radio"
              name="test"
              value="list"
              checked={test === "list"}
              onChange={handleChange}
            />
            <div className="w-40 border min-h-32 rounded-lg  grid place-items-center">
              <CiViewList color="grey" size={"60"} />
            </div>
            <p className="text-xs text-gray-300 mx-auto font-medium mt-1 text-center">
              List
            </p>
          </label>
          <label className="text-center">
            <input
              className="custom-radio"
              type="radio"
              name="test"
              value="board"
              checked={test === "board"}
              onChange={handleChange}
            />
            <div className="w-40 border min-h-32 rounded-lg  grid place-items-center ">
              <BsColumnsGap color="grey" size={"40"} />
            </div>
            <p className="text-xs text-gray-300 mx-auto font-medium mt-1 text-center">
              Board
            </p>
          </label>
        </div>
      </CustomCardWithHeadingAndSubHeading>
    </div>
  );
};

export default ThirdTab;
