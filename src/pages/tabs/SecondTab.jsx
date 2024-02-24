import React from "react";
import CustomCardWithHeadingAndSubHeading from "../../components/CustomCardWithHeadingAndSubHeading";
import TabbedLayout from "../../components/TabbedLayout";
import CustomLabelBox from "../../components/CustomLabelBox";
import Select from "react-select";
import { RateType } from "../../dummy";
import { FaRupeeSign } from "react-icons/fa";
import CustomInput from "../../components/CustomInput";
import CurrencyInput from "react-currency-input-field";
const SecondTab = ({ values, handleChange, setFieldValue, errors }) => {
  const { rateId, price, budgetId, bugetReset, percentage, sendEmail } = values;
  const items = [
    { title: "Time & Materials" },
    {
      title: "Fixed Fee",
    },
    {
      title: "Non-Billable",
    },
  ];
  return (
    <div>
      <CustomCardWithHeadingAndSubHeading
        headingText={"Project type"}
        subHeadingText={
          "Don't panic - You can also customize this types in settings"
        }
      >
        <TabbedLayout items={items}>
          <div>
            <CustomLabelBox
              name={"clientId"}
              labelText={"Hourly"}
              subLabelText={
                "We need hourly rates to track your project's billable amount"
              }
              customClass={"mt-2"}
            >
              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-1">
                <div className="w-full md:w-3/4 relative">
                  <Select
                    placeholder="Select "
                    value={rateId}
                    className="w-full  text-xs"
                    onChange={(e) => setFieldValue("rateId", e)}
                    isSearchable={true}
                    options={RateType}
                    name="rateId"
                    isLoading={false}
                    loadingMessage={() => "Fetching Client List"}
                    noOptionsMessage={() => "No Client List"}
                  />
                  {errors && errors?.rateId && (
                    <p className="text-red-500 text-xs top-full absolute left-0">
                      {errors?.rateId}
                    </p>
                  )}
                </div>
                <CurrencyInput
                  id="input-example"
                  name="price"
                  className="border p-2.5 py-1.5 focus:border-blue-500 rounded"
                  placeholder="Please enter a number"
                  prefix="₹"
                  value={price}
                  decimalsLimit={2}
                  onValueChange={(value, name, values) =>
                    setFieldValue(name, value)
                  }
                />
              </div>
            </CustomLabelBox>
            <CustomLabelBox
              name={"clientId"}
              labelText={"Budget"}
              subLabelText={
                "We need hourly rates to track your project's billable amount"
              }
              customClass={"mt-2"}
            >
              <div className="w-full md:w-1/2 relative">
                <Select
                  placeholder="Select "
                  value={budgetId}
                  className="w-full  text-xs"
                  onChange={(e) => setFieldValue("budgetId", e)}
                  isSearchable={true}
                  options={RateType}
                  name="budgetId"
                  isLoading={false}
                  loadingMessage={() => "Fetching Client List"}
                  noOptionsMessage={() => "No Client List"}
                />
                {errors && errors?.budgetId && (
                  <p className="text-red-500 text-xs top-full absolute left-0">
                    {errors?.budgetId}
                  </p>
                )}
              </div>
            </CustomLabelBox>
            <div class="flex items-center my-2 mt-4">
              <input
                id="default-checkbox"
                type="checkbox"
                name="bugetReset"
                checked={bugetReset}
                onChange={() => setFieldValue("bugetReset", !bugetReset)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 "
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm  text-gray-900 dark:text-gray-300"
              >
                Budget resets every month
              </label>
            </div>
            <div class="flex items-center my-2 mt-4">
              <input
                id="default-checkbox"
                type="checkbox"
                name="sendEmail"
                checked={sendEmail}
                onChange={() => setFieldValue("sendEmail", !sendEmail)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 "
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm  text-gray-900 dark:text-gray-300"
              >
                <p className="flex items-center">
                  Send email alerts if project exceeds{" "}
                  {
                    <input
                      className="p-1 bg-white w-16 border focus:border-blue-500 focus:ring-blue-400  mx-2"
                      name={"percentage"}
                      value={percentage}
                      onChange={handleChange}
                    />
                  }
                  {"  "}% of budget
                </p>
              </label>
            </div>
          </div>
        </TabbedLayout>
      </CustomCardWithHeadingAndSubHeading>
    </div>
  );
};

export default SecondTab;
