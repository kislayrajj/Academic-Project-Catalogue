import proj_1_thumbnail from "../../assets/images/project_thumbs/sem_1/python/proj_1_thumbnail.png"
import proj_2_thumbnail from "../../assets/images/project_thumbs/sem_1/DAA_Lab/sorting_al_vis_thumb.png"
import proj_3_thumbnail from "../../assets/images/project_thumbs/sem_1/r_lab/proj_3_thumbnail.png"
import proj_4_thumbnail from "../../assets/images/project_thumbs/sem_1/pl_sql/proj_4_thumbnail.png"
const projectData = [
  {
    semester: "Sem 1",
    subjects: [
      {
        subject: "Python",
        icon: <i className="fa-brands fa-python"></i>,
        projects: [
          {
            id: "proj_1",
            projectNumber: "Project 1",
            projectThumbnail:proj_1_thumbnail,
            projectName: "To-Do App",
            description: "A simple To-Do App to manage tasks efficiently.",
            functionalities: [
              "Add, edit, and delete tasks.",
              "Mark tasks as completed.",
              "View all tasks in a list format."
            ],
            technologies: ["Python", "Tkinter"],
            tools: ["Jupyter Notebook"],
            createdBy: "KR",
            liveDemo: "",
            githubRepo: "https://github.com/kislayrajj/todo-w-python",
            date: "28-10-20024",
            semester: "Sem 1",
            sub: "Python",
            path: "/projects/sem_1/python/TodoWithPython_proj_1",
          },
        ],
      },
      {
        subject: "DAA Lab",
        icon: <i className="fa-solid fa-chart-diagram"></i>,
        projects: [
          {
            id: "proj_2",
            projectNumber: "Project 1",
            projectName: "Sorting Algorithm Visualizer",
            projectThumbnail:proj_2_thumbnail,
            description:
              "A tool to visualize different sorting algorithms like Bubble, Selection, and Insertion sort.",
            functionalities: [
              "Visualize sorting algorithms step-by-step.",
              "Adjust sorting speed.",
              "Randomize the input array."
            ],
            technologies: ["HTML", "CSS", "JavaScript","DAA"],
            tools: ["VS Code", "GitHub"],
            createdBy: "KR",
            liveDemo: "https://sorting-algorithm-visualizer-daa.vercel.app/",
            githubRepo: "https://github.com/kislayrajj/Sorting-Algorithm-Visualizer-DAA",
            date: "04-11-2024",
            semester: "Semester 1",
            sub: "DAA Lab",
            path: "/projects/sem_1/daa_lab/SAV_daaLab_proj_2",
          },
        ],
      },
      {
        subject: "R Lab",
        icon: <i className="fa-brands fa-r-project"></i>,
        projects: [
          {
            id: "proj_3",
            projectNumber: "Project 1",
            projectName: "Analysis of Iris Dataset",
            projectThumbnail:proj_3_thumbnail,
            description:
              "An analysis of the Iris dataset to explore data distribution and relationships.",
            functionalities: [
              "Analyze data distribution.",
              "Generate summary statistics.",
              "Create visualizations like histograms and scatter plots."
            ],
            technologies: ["R", "ggplot2"],
            tools: ["RStudio"],
            createdBy: "KR",
            liveDemo: "",
            githubRepo: "https://github.com/kislayrajj/Analysis-of-the-Iris-Dataset-R",
            date: "05-11-2024",
            semester: "Sem 1",
            sub: "R Lab",
            path: "/projects/sem_1/R_lab/Analysis_of_the_Iris_Dataset_R_proj_3",
          },
        ],
      },
      {
        subject: "PL/SQL",
        icon: <i className="fa-solid fa-database"></i>,
        projects: [
          {
            id: "proj_4",
            projectNumber: "Project 1",
            projectName: "Library Management System",
            projectThumbnail:proj_4_thumbnail,

            description:
              "A desktop-based application for managing library books and records.",
            functionalities: [
              "Add, update, and delete book records.",
              "Search for books by title or author.",
              "Generate reports of issued and returned books."
            ],
            technologies: ["PL/SQL", "Oracle SQL Developer, JS, NodeJS"],
            tools: ["Oracle Database", "SQL Developer, VS Code"],
            createdBy: "KR",
            liveDemo: "",
            githubRepo: "https://github.com/kislayrajj/Library_management_system-PL-SQL",
            date: "06-11-2024",
            semester: "Sem 1",
            sub: "PL/SQL Lab",
            path: "/projects/sem_1/pl_sql_lab/LibraryManagementSystem_proj_4",
          },
        ],
      },
    ],
  },
  // {
  //   semester: "Sem 2",
  //   subjects: [
  //     {
  //       subject: "Physics",
  //       icon: <i className="fa-solid fa-atom"></i>,
  //       projects: [
  //         {
  //           id: "proj_5",
  //           projectNumber: "Project 1",
  //           projectName: "Motion Simulator",
  //           description:
  //             "A physics simulation of motion using JavaScript to demonstrate concepts of kinematics.",
  //           functionalities: [
  //             "Simulate uniform and accelerated motion.",
  //             "Adjust simulation parameters like velocity and time.",
  //             "Visualize motion graphs."
  //           ],
  //           technologies: ["HTML", "CSS", "JavaScript"],
  //           tools: ["VS Code", "Chrome DevTools"],
  // createdBy: "KR",
  //           liveDemo: "https://example.com/motion-simulator-demo",
  //           githubRepo: "https://github.com/username/motion-simulator",
  //           date: "2024-06-15",
  //           semester: "Sem 2",
  //           path: "/projects/sem_2/physics/motion_simulator",
  //           link: "/sem_2/physics/proj_1",
  //         },
  //       ],
  //     },
  //     {
  //       subject: "Data Structures",
  //       icon: <i className="fa-solid fa-code"></i>,
  //       projects: [
  //         {
  //           id: "proj_6",
  //           projectNumber: "Project 1",
  //           projectName: "Linked List Visualizer",
  //           description:
  //             "A visualization tool for understanding linked lists and their operations in C++.",
  //           functionalities: [
  //             "Visualize linked list creation and traversal.",
  //             "Perform insertion and deletion operations.",
  //             "Highlight nodes during visualization."
  //           ],
  //           technologies: ["C++", "SFML"],
  //           tools: ["Code::Blocks", "Git"],
  //           createdBy: "Eve Adams",
  //           liveDemo: "https://example.com/linked-list-visualizer-demo",
  //           githubRepo: "https://github.com/username/linked-list-visualizer",
  //           date: "2024-07-10",
  //           semester: "Sem 2",
  //           path: "/projects/sem_2/data_structures/linked_list_visualizer",
  //           link: "/sem_2/data_structures/proj_1",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default projectData;
