localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Rohan",
    email: "employee1@company.com",
    password: "1234",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile the Q3 sales data and prepare a performance report.",
        date: "2025-10-05",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Send follow-up emails to pending client leads.",
        date: "2025-10-08",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Data Backup",
        description: "Perform a weekly backup of all project files.",
        date: "2025-10-09",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@company.com",
    password: "1234",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Update Website Content",
        description: "Revise the About Us section with updated company info.",
        date: "2025-10-02",
        category: "Web",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Fixing",
        description: "Fix reported issues from the latest website release.",
        date: "2025-10-07",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly stand-up meeting.",
        date: "2025-10-10",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review code submissions from junior developers.",
        date: "2025-10-11",
        category: "Review",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Arjun",
    email: "employee3@company.com",
    password: "1234",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Database Optimization",
        description: "Improve MongoDB query performance.",
        date: "2025-10-04",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Deploy New Version",
        description: "Push the latest build to the staging server.",
        date: "2025-10-06",
        category: "Deployment",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server Monitoring",
        description: "Check server health and uptime logs.",
        date: "2025-10-09",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@company.com",
    password: "1234",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Review",
        description: "Evaluate UI mockups from the design team.",
        date: "2025-10-03",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prototype Testing",
        description: "Test new feature prototypes and gather feedback.",
        date: "2025-10-07",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "User Feedback Analysis",
        description: "Analyze feedback from beta testers.",
        date: "2025-10-10",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare Presentation",
        description: "Create slides for product demo presentation.",
        date: "2025-10-11",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@company.com",
    password: "1234",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "API Integration",
        description: "Integrate external payment API with the main system.",
        date: "2025-10-05",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Documentation",
        description: "Update API documentation with the latest endpoints.",
        date: "2025-10-08",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Testing Suite Setup",
        description: "Implement automated testing for backend services.",
        date: "2025-10-09",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team Mentoring",
        description: "Help new interns understand project structure.",
        date: "2025-10-10",
        category: "Mentorship",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];



  const admin = [
    {
         "id": 1,
         "email": "admin@company.com",
         "password": "1234"
    }
  ]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
}

