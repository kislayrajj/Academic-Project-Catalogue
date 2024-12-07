import React from "react";
import { motion } from "framer-motion";
import projectData from "../../../data/leftBarData/leftBarData";
const LibraryManagementSystem_proj_4 = () => {
  const projectId = "proj_4";
  const project = projectData
    .flatMap((sem) => sem.subjects)

    .flatMap((sub) => sub.projects)
    .find((proj) => proj.id === projectId);

  console.log(project);
  console.log(project?.functionalities);
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 min-h-screen p-2">
      <div className="flex flex-col justify-center items-center py-2 gap-2 md:gap-12">
        <div className="flex flex-wrap bg-gradient-to-r from-blue-800 to-indigo-900 justify-start md:gap-12 rounded-md overflow-hidden lg:h-24">
          <div className="flex flex-col justify-end font-semibold text-white p-2 text-xs md:text-base">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              {project.sub}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              {project.semester}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              Date: {project.date}
            </motion.div>
          </div>
          <div className="w-full md:w-fit bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold  center  items-center px-1 md:text-xl lg:text-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              {project?.projectNumber}: {project.projectName}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="md:w-[600px] shadow-xl rounded-md overflow-hidden">
          <img
            src={project.projectThumbnail}
            alt="Project thumbnail"
            className="object-cover"
          />
        </motion.div>

        {/* project functionality */}
        <div className="flex justify-between gap-5 md:gap-12 flex-wrap mt-2 text-xs md:text-base">
          <div className="flex flex-col gap-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-semibold bg-blue-500 w-fit px-1 rounded-sm text-white">
              Functionalities
            </motion.div>
            <div>
              <ul className="list-inside list-disc text-black">
                {project?.functionalities?.map((functionality, idx) => {
                  return (
                    <motion.li
                      key={functionality}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.4 }}
                      className=" mt-1">
                      {functionality}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-semibold bg-blue-500 w-fit px-1 rounded-sm text-white">
              Additional Info
            </motion.div>
            <ul className="mt-1 flex flex-col gap-1.5">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="">
                <span className="font-medium md:font-semibold">
                  Created By:
                </span>{" "}
                {project?.createdBy}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="">
                <span className="font-medium md:font-semibold">
                  Technologies:
                </span>{" "}
                {project?.technologies?.join(", ")}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="">
                <span className="font-medium md:font-semibold">Tools:</span>{" "}
                {project?.tools?.join(", ")}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="">
                <span className="font-medium md:font-semibold">Live Demo:</span>{" "}
                {project?.liveDemo ? (
                  <a
                    href={project?.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                    title="click to visit website">
                    Live Demo
                  </a>
                ) : (
                  "NA"
                )}
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="">
                <span className="font-medium md:font-semibold">
                  Repository:
                </span>{" "}
                <a
                  href={project?.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                  title="click to visit GitHub Repo">
                  {" "}
                  Visit GitHub Repository
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryManagementSystem_proj_4;
