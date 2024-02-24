import { useState } from "react";
import { Theme } from "../../theme";

const TabbedLayout = ({
  items,
  children,
  tabView = true,
  SubmitText,
  handleSubmit,
}) => {
  if (!Array.isArray(children)) {
    children = [children];
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const setView = (index) => setActiveIndex(index);
  const ShowTitleAndSubTitle = ({ titleArr }) => {
    return (
      titleArr && (
        <div className=" w-full rounded flex mt-2">
          {titleArr.map((el, index) => {
            return (
              <div
                key={el.title}
                className={`${
                  index === activeIndex
                    ? `bg-blue-500 ${Theme.Font.Header} text-white  hover:bg-blue-600 font-normal`
                    : "bg-gray-50 text-gray-400  hover:bg-white"
                } ${index === 0 ? "rounded-l-lg" : ""} ${
                  index === titleArr?.length - 1 ? "rounded-r-lg" : ""
                } py-2 px-3 w-full  cursor-pointer border border-gray-200 text-sm font-medium  grid place-items-center `}
                onClick={() => {
                  setView(index);
                }}
              >
                {el.title}{" "}
              </div>
            );
          })}
        </div>
      )
    );
  };
  const changeTab = (change) => {
    if (!tabView && activeIndex === children?.length - 1 && change !== -1) {
      return handleSubmit();
    }
    if (activeIndex !== 0 || activeIndex !== children?.length - 1) {
      setActiveIndex((act) => act + change);
    }
  };
  return (
    <>
      <div className={`flex`}>
        {tabView && <ShowTitleAndSubTitle titleArr={items} />}
      </div>
      {children &&
        children.map((el, index) => {
          return (
            <>
              {activeIndex === index && (
                <div>
                  <div className="p-4 bg-white ">{el}</div>
                </div>
              )}
            </>
          );
        })}
      {!tabView && (
        <div className="w-full my-4">
          <div className="flex items-center  mb-3 p-2  w-full">
            <div className="ml-0 mr-auto ">
              {activeIndex !== 0 && (
                <button
                  onClick={() => changeTab(-1)}
                  className="hover:cursor-pointer border-none outline-none p-1 px-2 rounded text-gray-500 hover:bg-gray-400 hover:text-white "
                >
                  <span className="pr-1 ">{"<"}</span>Back
                </button>
              )}
            </div>
            {
              <button
                onClick={() => changeTab(1)}
                className={`btn-primary font-normal px-4 py-1 rounded-lg hover:cursor-pointer ${
                  activeIndex === 0 ? "" : "-translate-x-[2rem]"
                } mx-auto `}
              >
                {activeIndex !== children?.length - 1
                  ? "Next"
                  : SubmitText || "Sumbit"}
              </button>
            }
            {<button className="mr-0 ml-auto"></button>}
          </div>
          <div className="flex justify-center w-full gap-1">
            {children.map((_, i) => (
              <div
                onClick={() => setActiveIndex(i)}
                className={`${
                  activeIndex === i ? "w-4" : "w-2"
                } h-2 bg-gray-500 hover:cursor-pointer rounded-full`}
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TabbedLayout;
