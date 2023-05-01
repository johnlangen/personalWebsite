// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  //gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",

  
  firstName: "John",
  middleName: "",
  lastName: "Langenderfer",
  message: " Software Engineer and Data Scientist. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/johnlangen",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/john-langenderfer-/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/johnlangen6/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/resumePhoto.png"),
  imageSize: 375,
  message:
    "I am an experienced developer with a deep understanding of machine learning, natural language processing, and neural networks, including convolutional neural networks. Well-versed in TensorFlow, I have extensive experience in extracting data using APIs and web scraping. I enjoy building applications for my projects using React and Django, taking great pride in my ability to deliver high-quality, reliable code. My expertise in machine learning and data analysis has been honed through years of experience working on various projects, including stock predictions programs and biomedical image analysis. I am particularly skilled in extracting and analyzing large datasets, specifically in the biomedical field, sports, and finance. My proficiency in convolutional neural networks has also allowed me to excel in biomedical image analysis. I possess a keen ability to make sense of vast amounts of data, uncovering valuable insights and patterns that inform decision-making in these fields. With a track record of success in my projects, I am always on the lookout for new and challenging opportunities to apply my skills and knowledge. Passionate about staying up-to-date with the latest developments in the field, I continuously seek ways to improve my skills."
    ,
  resume: require("../editable-stuff/resume.pdf"),
};

const projectsSection = {
  show: true,
  heading: "Featured Projects",
  projects: [
    {
      title: "Project 1",
      description: "Description of Project 1",
      pdfLink: "link-to-pdf-file-1",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      pdfLink: "link-to-pdf-file-2",
    },
  ],
};


// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "johnlangen", // i.e. "johnDoe12Gh"
  reposLength: 0, // Set this to 0 to display specific repositories
  specificRepos: [
    "StockPredictionsWithML",
    "BiomedicalImageAnalysis",
    "RandomNumberWebsite",
    "PowerPlayerWebsite",
    "Financial-Modeling-Programs",
    "Personal--Website",
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/resumePhoto.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/resumePhoto.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 100},
    { name: "SQL", value: 80 },
    { name: "Data Structures", value: 100 },
    { name: "C/C++", value: 70 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 80 },
    { name: "HTML/CSS", value: 90 },
    { name: "C#", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 95 },
    { name: "Collaboration", value: 95 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 100 },
    { name: "Empathy", value: 85 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for a Software Engineering or Data Science job! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "langen.p.john@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, projectsSection };

