import React from "react";
import CustomInput from "../../components/CustomInput";
import CustomCardWithHeadingAndSubHeading from "../../components/CustomCardWithHeadingAndSubHeading";
import Select from "react-select";
import { ClientList } from "../../dummy";
import CustomLabelBox from "../../components/CustomLabelBox";
import CustomDatePicker from "../../components/CustomDatePicker";

const FirstTab = ({ values, handleChange, setFieldValue, errors }) => {
  const { projectName, clientId, startFrom, endsOn, notes } = values;
  return (
    <div>
      <CustomCardWithHeadingAndSubHeading headingText={"Create a Project"}>
        <div className="relative">
          <CustomInput
            name="projectName"
            labelText={"Project Name"}
            value={projectName}
            onChange={handleChange}
          />
          {errors && errors?.projectName && (
            <p className="text-red-500 text-xs top-full absolute left-0">
              {errors?.projectName}
            </p>
          )}
        </div>
        <CustomLabelBox
          name={"clientId"}
          labelText={"Client"}
          customClass={"mt-2"}
        >
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-1">
            <div className="w-full md:w-3/4 relative">
              <Select
                placeholder="Select Client"
                value={clientId}
                className="w-full  text-xs"
                onChange={(e) => setFieldValue("clientId", e)}
                isSearchable={true}
                options={ClientList}
                name="clientId"
                isLoading={false}
                loadingMessage={() => "Fetching Client List"}
                noOptionsMessage={() => "No Client List"}
              />
              {errors && errors?.clientId && (
                <p className="text-red-500 text-xs top-full absolute left-0">
                  {errors?.clientId}
                </p>
              )}
            </div>
            <span className="text-xs mx-auto text-gray-300">Or</span>
            <button className="btn p-2 font-medium  text-xs border rounded hover:border-blue-400">
              <span className="text-gray-400">+ New Client</span>
            </button>
          </div>
        </CustomLabelBox>
        <CustomLabelBox
          name={"clientId"}
          labelText={"Dates"}
          customClass={"mt-2"}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full relative">
              <CustomDatePicker
                name={"startFrom"}
                value={startFrom}
                handleChange={(e) => setFieldValue("startFrom", e)}
                handleDateSelect={(e) => setFieldValue("startFrom", e)}
              />
              {errors && errors?.startFrom && (
                <p className="text-red-500 text-xs top-full absolute left-0">
                  {errors?.startFrom}
                </p>
              )}
            </div>
            <span className="font-bold mx-2 text-gray-300">-</span>
            <div className="w-full relative">
              {" "}
              <CustomDatePicker
                name={"endsOn"}
                value={endsOn}
                handleChange={(e) => setFieldValue("endsOn", e)}
                handleDateSelect={(e) => setFieldValue("endsOn", e)}
              />
              {errors && errors?.endsOn && (
                <p className="text-red-500 text-xs top-full absolute left-0">
                  {errors?.endsOn}
                </p>
              )}
            </div>
          </div>
        </CustomLabelBox>
        <CustomLabelBox labelText={"Notes"} customClass={"my-2"}>
          <textarea
            id="message"
            rows="4"
            className="p-2.5 w-full text-sm text-gray-900 rounded-lg border focus:border-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </CustomLabelBox>
      </CustomCardWithHeadingAndSubHeading>
    </div>
  );
};

export default FirstTab;
