import React from "react";
import { motion } from "framer-motion";
import savThumb from "../../../assets/images/project_thumbs/sem_1/DAA_Lab/sorting_al_vis_thumb.png";

const SAV_daaLab_proj_1 = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-xl rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header Section */}
      <motion.div
        className="relative bg-blue-600 text-white py-6 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sorting Algorithm Visualizer
        </motion.h1>
        <p className="text-sm font-light mt-2">
          Understand sorting algorithms interactively
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full flex justify-center py-6 px-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <img
          src={savThumb}
          alt="Sorting Algorithm Visualizer"
          className="rounded-lg shadow-md object-cover w-full sm:w-3/4"
        />
      </motion.div>

      {/* Project Details */}
      <motion.div
        className="px-8 py-6 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">About the Project</h2>
          <p className="text-gray-600 mt-2">
            A Python-based interactive tool that visualizes sorting algorithms with
            easy-to-understand animations. Built using Jupyter Notebook for educational purposes.
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
          <ul className="list-inside list-disc space-y-2 mt-2 text-gray-600">
            <li>Interactive visualizations for various sorting algorithms</li>
            <li>Step-by-step animations for better understanding</li>
            <li>Clean and intuitive user interface</li>
          </ul>
        </section>

        {/* Additional Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <strong className="font-semibold text-gray-800">Created by:</strong> K
            </p>
            <p className="text-gray-600">
              <strong className="font-semibold text-gray-800">Date:</strong> 04-11-2023
            </p>
            <p className="text-gray-600">
              <strong className="font-semibold text-gray-800">Technologies:</strong> Python
            </p>
            <p className="text-gray-600">
              <strong className="font-semibold text-gray-800">Tools:</strong> Jupyter Notebook
            </p>
          </div>

          <div>
            <p className="text-gray-600">
              <strong className="font-semibold text-gray-800">GitHub Repository:</strong>{" "}
              <a
                href="https://github.com/kislayrajj/Sorting-Algorithm-Visualizer-DAA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Visit Repo
              </a>
            </p>
            <p className="text-gray-600">
              <strong className="font-semibold text-gray-800">Live Demo:</strong>{" "}
              <a
                href="https://sorting-algorithm-visualizer-daa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Click Here
              </a>
            </p>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default SAV_daaLab_proj_1;
