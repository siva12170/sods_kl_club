import { data } from "autoprefixer";
import {
  poerbi,
  pythonwall,
  sql,
  analytics,
  datacleaning,
  datacollection,
  dataset,
  exploration,
  mlmodel,
  nontech,
  statistics,
  testing,
  ml,   
  python1,
  machineLearning,
  datavis,
    mobile,
    backend,
    creator,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
  } 
from "../assets";
import image1 from '../assets/members/image1.jpg'
import image2 from '../assets/members/image2.jpg'
import image3 from '../assets/members/image3.jpg'
import image4 from '../assets/members/image4.jpg'
import image5 from '../assets/members/image5.jpg'
import image6 from '../assets/members/image6.jpg'
import image7 from '../assets/members/image7.jpg'
import image8 from '../assets/members/image8.jpg'
import image9 from '../assets/members/image9.jpg'
import image10 from '../assets/members/image10.jpg'
import image11 from '../assets/members/image11.jpg'
import image12 from '../assets/members/image12.jpg'
import image14 from '../assets/members/image14.jpg'
import image15 from '../assets/members/image15.jpg'
import image16 from '../assets/members/image16.jpg'
import image17 from '../assets/members/image17.jpg'
import image18 from '../assets/members/image18.jpg'
import image19 from '../assets/members/image19.jpg'
import image20 from '../assets/members/image20.jpg'
import image21 from '../assets/members/image21.jpg'
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "roadmap",
      title: "Roadmap",
    },
    {
        id: "sessions",
        title: "Sessions",
    },
    {
        id:"Team",
        title: "Members",
    },
    {
        id: "contact",
        title: "Register",
      },
  ];
  
  const services = [
    {
      title: "Python",
      icon: python,
    },
    {
      title: "Machine Learning",
      icon: machineLearning,
    },
    {
      title: "Data Visualization",
      icon: datavis,
    },
    {
      title: "Data Manipulation",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Python",
      company_name: "Python",
      icon: python1,
      iconBg: "#383E56",
      date: "Programming Language",
      points: [
        "Python's straightforward and readable syntax makes it accessible to data scientists of all levels, enabling them to focus on data analysis and modeling rather than grappling with complex programming.",
        "Python boasts a vast array of specialized libraries like NumPy, pandas, Matplotlib, and seaborn, which facilitate data manipulation, analysis, visualization, and statistical modeling, streamlining the data science workflow.",
        "Its open-source community fosters collaboration and rapid advancement in data science.",
        "Python simplifies data analysis with its intuitive syntax and rich libraries.",
      ],
    },
    {
      title: "Learn Statistics",
      company_name: " Learn Statistics",
      icon: statistics,
      iconBg: "#E6DEDD",
      date: "Step 2",
      points: [
        "If Data Science is a language, then statistics is basically the grammar.",
        "Statistics is basically the method of analyzing, interpretation of large data sets.",
        "When it comes to data analysis and gathering insights, statistics is as noteworthy as air to us.",
        "Statistics help us understand the hidden details from large datasets.",
      ],
    },
    {
      title: "Data Collection",
      company_name: "Data Collection",
      icon: datacollection,
      iconBg: "#383E56",
      date: "Step 3",
      points: [
        "This is one of the key and important steps in the field of Data Science. ",
        "This skill involves knowledge of various tools to import data from both local systems, as CSV files, and scraping data from websites, using beautifulsoup python library.",
        "Scrapping can also be API-based. Data collection can be managed with knowledge of Query Language or ETL pipelines in Python",
      ],
    },
    {
      title: "Data Cleaning",
      company_name: "Data Cleaning",
      icon: datacleaning,
      iconBg: "#E6DEDD",
      date: "Step 4",
      points: [
        "Data cleaning is all about obtaining the data, fit for doing work& analysis, by removing unwanted values, missing values, categorical values, outliers, and wrongly submitted records, from the Raw form of Data.",
        "Data Cleaning is very important as real-world data is messy in nature and achieving it with help of various python libraries(Pandas and NumPy)is really important for an aspirant Data Scientist",
      ],
    },
    {
      title: "Acquaintance With EDA( Exploratory Data Analysis)",
      company_name: "Acquaintance With EDA( Exploratory Data Analysis)",
      icon: exploration,
      iconBg: "#E6DEDD",
      date: "Step 5",
      points: [
        "EDA( Exploratory data analysis) is the most important aspect in the vast field of data science. It includes analyzing various data, variables, various data patterns, trends and extracting useful insights from them with help of various graphical and statistic l methods. ",
        "EDA identifies various pattern which Machine learning algorithm might fail to identify. It includes all Data Manipulation, Analysis, and Visualization.",
      ],
    },
    {
      title: "Machine Learning & Deep Learning",
      company_name: "Machine Learning & Deep Learning",
      icon: ml,
      iconBg: "#E6DEDD",
      date: "Step 6",
      points: [
        "Machine learning is the core skill required to be a Data Scientist. Machine learning is used to build various predictive models, classification models, etc., and is being used By big firms, Companies to Optimize their planning as per the predictions",
        "Deep Learning on the other hand is and an advanced version of Machine Learning which deploys the use of Neural Network, a framework that combines various machine learning algorithms for solving various tasks, for training data. Various Neural networks are recurrent neural network (RNN) or a convolutional neural network (CNN) etc",
      ],
    },
    {
      title: "Learn Deploying of ML model",
      company_name: "Learn Deploying of ML model",
      icon: mlmodel,
      iconBg: "#E6DEDD",
      date: "Step 7",
      points: [
        "Deployment is basically the process of making your Machine Learning Model available to end-users for use. ",
        "This is achieved by the integration of the model with various existing production environments thus implementing the practical use of the ML model for various Business solutions.",
        "There are many services for deploying your ML model like Flask, Pythoneverywhere, MLOps , Microsoft Azure, Google Cloud, Heroku, etc",
      ],
    },
    {
      title: "Real-World Testing",
      company_name: "Real-World Testing",
      icon: testing,
      iconBg: "#E6DEDD",
      date: "Step 8",
      points: [
        "Testing and Validation of the Machine Learning Model after Deployment Should Be done In order to check its effectiveness and accuracy. Testing is an Important Step In Data Science for keeping the efficiency and effectiveness of the ML model In check.",
        "There is Various Type Of Testing like A/B, AAB Testing, etc.",
      ],
    },
    {
      title: "Exploring and Practicing datasets on Kaggel",
      company_name: "Exploring and Practicing datasets on Kaggle, Analytics Vidhya",
      icon: dataset,
      iconBg: "#E6DEDD",
      date: "Step 9",
      points: [
        "World’s Largest Data Science Communities like Kaggle, Analytics Vidhya is very helpful for getting in touch with various datasets and therefore can be used for practicing Various Data analysis techniques, machine learning algorithms.",
        "Competitions being held in these communities are also useful for sharpening the skills of data science, thus helping us to achieve our goal of becoming proficient in Data Science faster.",
      ],
    },
    {
      title: "Analytical Curiosity ",
      company_name: "Analytical Curiosity ",
      icon: analytics,
      iconBg: "#E6DEDD",
      date: "Step 10",
      points: [
        "The data science field is a field that is evolving at a higher pace, therefore it requires inbuilt curiosity to explore more about the field, regularly updating and learning various skills & techniques.",
        "This is the main skill that will always help us maintaining, updating new skills & concepts, thus preventing us from lagging behind various Data Science technological advancements.",
      ],
    },
    {
      title: "Non-Technical Skills",
      company_name: "Non-Technical Skills",
      icon: nontech,
      iconBg: "#E6DEDD",
      date: "Step 11",
      points: [
        "Non-Technical includes Teamwork, Communication Skills, Task management, Business understanding, etc",
        "Teamwork plays an important role while delivering the result to the firms, companies we are working as data scientists.",
        "Communication skills allow us to express our technical ideas, concepts to various non-technical staff/ authorities of the Firm.",
        "Business understanding/ acumen or the understanding about the industry we are working in is very important for various analyses and effective solutions for the problems in those industries.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SQL",
      description:
        "SQL (Structured Query Language) is a fundamental tool for managing and querying databases. It allows users to interact with databases, retrieve specific information, and perform various operations like inserting, updating, and deleting data. Understanding SQL is crucial for anyone involved in data management, analysis, or software development. It provides a standardized way to communicate with databases and is essential for creating, modifying, and retrieving data efficiently.",
      tags: [
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_code_link: "https://github.com/",
    },
    {
      name: "Python",
      description:
        "Python is a versatile and beginner-friendly programming language known for its simplicity and readability. It is widely used in various domains, including web development, data analysis, artificial intelligence, and automation. Python's extensive standard library and rich ecosystem of frameworks and libraries make it an excellent choice for developers. It promotes an efficient and intuitive coding experience, making it ideal for learners and educators. Its versatility and widespread adoption make Python a valuable language for aspiring programmers to master.",
      tags: [
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: pythonwall,
      source_code_link: "https://github.com/",
    },
    {
      name: "Power BI",
      description:
        "Power BI is a powerful business intelligence tool that allows users to visualize and share insights from their data in an intuitive and interactive manner. It seamlessly integrates with various data sources, enabling efficient data collection and transformation. Users can create compelling dashboards and reports with just a few clicks, making complex data analysis accessible to everyone. With features like natural language querying and AI-powered insights, Power BI enhances data interpretation and decision-making.",
      tags: [
        {
          name: "Power BI",
          color: "blue-text-gradient",
        },
      ],
      image: poerbi,
      source_code_link: "https://github.com/",
    },
  ];
  const team = [
    {
      name: "Venkat",
      description:
      "President",
      image: image9,
    },
    {
      name: "Gnapika",
      description:
      "Vice-president",
      image: image10,
      
    },
    {
      name: "Yamini",
      description:
      "Director",
      image: image3,
    },
    {
      name: "MahaLakshmi",
      description:
      "Technical",
      image: image4,
    },
    {
      name: "Dilip",
      description:
      "Non-Technical Lead",
      image: image2,
    },
    {
      name: "Sampath ",
      description:
      "Technical",
      image: image11,
    },
    {
      name: " Surya",
      description:
      "Technical",
      image: image7,
    },
    {
      name: "Jyoshna",
      description:
      "Non-Technical",
      image: image5,
    },
   
    {
      name: "Ashwini ",
      description:
      "Non-Technical",
      image: image1,
    },
    
    {
      name: "siva sekhar ",
      description:
      "Technical",
      image: image6,
    },
  
    {
      name: " Damini",
      description:
      "Non-Technical",
      image: image8,
    },
    {
      name: " Jyoshna",
      description:
      "member",
      image: image12,
    },
   
    {
      name: "Veeram Reddy Sreeja",
      description:
      "member",
      image: image14,
    },
    {
      name: " Rasagna",
      description:
      "member",
      image: image15,
    },
    {
      name: " Vidhya",
      description:
      "member",
      image: image16,
    },
    {
      name: "N. Shushmitha",
      description:
      "member",
      image: image17,
    },
    {
      name: " Y. Udaya Sri",
      description:
      "member",
      image: image18,
    },
    {
      name: "K.Vishal Sruvatsav",
      description:
      "member",
      image: image19,
    },
    {
      name: " KUnigiri Kavya",
      description:
      "member",
      image: image20,
    },
    {
      name: "P.N.V.S.S.V.V.Kishore",
      description:
      "member",
      image: image21,
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects,team };