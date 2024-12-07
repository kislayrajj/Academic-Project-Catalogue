import React, { useState } from "react";
import ProjectData from "../data/leftBarData/leftBarData";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
const LeftBar = ({ barOpen, setBarOpen }) => {
  // const [barOpen, setBarOpen] = useState(true);
  const [openSemester, setOpenSemester] = useState(null);
  const [openSubject, setOpenSubject] = useState(null);

  const handleBar = () => {
    setBarOpen(!barOpen);
    // console.log(barOpen);
  };

  const toggleSemester = (semester) => {
    // setOpenSemester(!openSemester);
    setOpenSemester((prev) => (prev === semester ? null : semester));
    // console.log(openSemester);
  };

  const toggleSubject = (subject) => {
    setOpenSubject((prev) => (prev === subject ? null : subject));
    // console.log(openSubject);
  };

  // console.log(ProjectData);
  return (
    <div
      className={`bg-gradient-to-r from-cyan-500 to-blue-500 h-screen p-2 transition-all duration-300 overflow-hidden fixed ${
        barOpen ? "w-32 text-xs md:w-52 xl:w-64  " : "w-12"
      }`}>
      <div className="flex justify-end items-center relative">
        <Link to="/"><div className={`${
          barOpen ? "absolute left-0 top-0 text-white text-lg" : "hidden"
        }`}>Home</div></Link>
        <div
          title={barOpen ? "Close Menu" : "Open Menu"}
          onClick={handleBar}
          className="bg-white size-8 p-1 px-2 rounded-sm group hover:bg-cyan-600">
          {barOpen ? (
            <i className="fa-solid fa-angles-left text-blue-600 group-hover:scale-125 group-hover:text-white transition-all duration-150 ease-in-out text-base"></i>
          ) : (
            <i className="fa-solid fa-angles-right text-blue-600 group-hover:scale-125 group-hover:text-white transition-all duration-150 ease-in-out text-base"></i>
          )}
        </div>
      </div>
      <div
        className={` ${
          barOpen ? " " : "hidden"
        }  flex h-full flex-col md:justify-center text-right md:px-12 mt-5 md:-0`}>
        <div>
          {ProjectData?.map((data) => {
            return (
              <div key={data.semester} className="text-white text-xs md:text-xl">
                <div
                  onClick={() => toggleSemester(data.semester)}
                  className={`border-2 border-transparent border-b-white rounded-br-lg  text-lg 
                ${
                  !openSemester === data.semester
                    ? "hover:text-blue-600 hover:bg-gray-100 hover:rounded-br-sm"
                    : ""
                } px-2 rounded-sm transition-all duration-100 text-sm md:text-xl ease-in-out cursor-pointer
                `}>
                  {data?.semester}
                </div>
                <AnimatePresence mode="wait">
                  {barOpen && openSemester === data.semester && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="subjects overflow-hidden">
                      <div className="text-left text-gray-200 text-xs md:text-lg">
                        Subs:
                      </div>
                      <div>
                        {data?.subjects.map((subject) => {
                          return (
                            <ul key={subject?.subject} className=" w-full">
                              <li
                                onClick={() => toggleSubject(subject.subject)}
                                className="text-xs md:text-lg  cursor-pointer xl:my-1 ">
                                <div
                                  className={`flex items-center  justify-between group ${
                                    openSubject === subject.subject
                                      ? "text-slate-800 underline underline-offset-4"
                                      : ""
                                  } `}>
                                  <div
                                    className={`${
                                      openSubject === subject.subject
                                        ? "font-bold"
                                        : ""
                                    }`}>
                                    {" "}
                                    {subject?.subject}
                                  </div>
                                  <div
                                    className={`text-slate-900  transition-all duration-200 ${
                                      openSubject === subject.subject
                                        ? "-rotate-12"
                                        : "group-hover:rotate-12"
                                    } `}>
                                    {subject?.icon}
                                  </div>
                                </div>

                                <div>
                                  {openSubject === subject.subject && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.2 }}>
                                      {subject?.projects?.map((project) => {
                                        return (
                                          <div>
                                            <ul key={project?.id}>
                                              <li className="text-xs md:text-base">
                                              
                                                  <Link to={project?.path}>{project?.projectNumber}</Link>
                                                   
                                              </li>
                                            </ul>
                                          </div>
                                        );
                                      })}
                                    </motion.div>
                                  )}
                                </div>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
