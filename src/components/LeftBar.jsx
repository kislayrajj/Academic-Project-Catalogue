import React, { useState } from "react";
import ProjectData from "../data/leftBarData/leftBarData";
const LeftBar = () => {
  const [barOpen, setBarOpen] = useState(true);

  const handleBar = () => {
    setBarOpen(!barOpen);
    console.log(barOpen);
  };
  console.log(ProjectData);
  return (
    <div
      className={`bg-gradient-to-r from-teal-200 to-teal-500 min-h-screen p-2 transition-all duration-300 overflow-hidden ${
        barOpen ? "md:w-52 xl:w-64  " : "w-12"
      }`}>
      <div className="flex justify-end items-center">
        <div
          title={barOpen ? "Close Menu" : "Open Menu"}
          onClick={handleBar}
          className="bg-white size-8 p-1 px-2 rounded-sm group hover:bg-teal-600">
          {barOpen ? (
            <i className="fa-solid fa-angles-left text-teal-600 group-hover:scale-125 group-hover:text-white transition-all duration-150 ease-in-out"></i>
          ) : (
            <i className="fa-solid fa-angles-right text-teal-600 group-hover:scale-125 group-hover:text-white transition-all duration-150 ease-in-out"></i>
          )}
        </div>
      </div>
      <div
        className={` ${
          barOpen ? " " : "hidden"
        }  flex h-full flex-col justify-center text-right px-12`}>
        <div>
          {ProjectData?.map((data) => {
            return (
              <div key={data.semester} className="text-white ">
                <div
                  className="border-2 border-transparent border-b-white rounded-br-lg hover:rounded-br-sm text-lg 
                hover:text-teal-600
                hover:bg-gray-100 px-2 rounded-sm transition-all duration-100 ease-in-out
                ">
                  {data?.semester}
                </div>
                <div className="subjects">
                  {data?.subjects.map((subject) => {
                    return <div key={subject?.subject}>{subject?.subject}</div>;
                  })}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
