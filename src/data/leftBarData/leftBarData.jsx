const data = [
  {
    semester: "Sem 1",
    subjects: [
      {
        subject: "Python",
        icon : <i className="fa-brands fa-python"></i>,
        projects: [
          {
            id: "proj_1", // Unique ID for the project
            projectNumber: "Project 1",
            projectName: "Project 1: To-Do App",
            description: "A Simple To-Do App",
            path:"/projects/sem_1/daa_lab/SAV_daaLab_proj_1",
            link:""

          },
        ],
      },
      {
        subject: "Daa Lab",
        icon:<i className="fa-solid fa-chart-diagram"></i>,
        projects: [
          {
            id: "proj_2", // Unique ID for the project
            projectNumber:"Project 1",
            projectName: "Project 1: Sorting Algorithm Visualizer",
            description: "A tool to visualize different sorting algorithms.",
            path:"",
            link:""
          },
        ],
      },
      {
        subject: "R Lab",
        icon:<i className="fa-brands fa-r-project"></i>,
        projects: [
          {
            id: "proj_3", // Unique ID for the project
            projectNumber:"Project 1",
            projectName:
              "Project 1: Analysis Of Data Distribution Of Iris Dataset",
            description:
              "An analysis of the Iris dataset to explore its data distribution.",
            path:"",
            link:""
          },
        ],
      },
      {
        subject: "PL/SQL",
        icon:<i className="fa-solid fa-database"></i>,
        projects: [
          {
            id: "proj_4", // Unique ID for the project
            projectNumber:"Project 1",
            projectName: "Project 1: Library Management System",
            description: "A desktop-based library management system.",
            path:"",
            link:""
          },
        ],
      },
    ],
    // },
    // {
    //   semester: "Sem 2",
    //   subjects: [
    //     {
    //       subject: "Physics",
    //       projects: [
    //         {
    //           id: "proj_5", // Unique ID for the project
    //           projectName: "Project 1: Motion Simulator",
    //           description: "A physics simulation of motion using JavaScript."
    //         }
    //       ]
    //     },
    //     {
    //       subject: "Data Structures",
    //       projects: [
    //         {
    //           id: "proj_6", // Unique ID for the project
    //           projectName: "Project 1: Linked List Visualizer",
    //           description: "A visualization tool for linked lists in C++."
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   semester: "Sem 3",
    //   subjects: [
    //     {
    //       subject: "Database Management Systems",
    //       projects: [
    //         {
    //           id: "proj_7", // Unique ID for the project
    //           projectName: "Project 1: SQL Query Optimizer",
    //           description: "A tool to optimize SQL queries for faster execution."
    //         }
    //       ]
    //     },
    //     {
    //       subject: "Software Engineering",
    //       projects: [
    //         {
    //           id: "proj_8", // Unique ID for the project
    //           projectName: "Project 1: Bug Tracking System",
    //           description: "A bug tracking system using Java."
    //         }
    //       ]
    //     }
    //   ]
  },
];

export default data;
