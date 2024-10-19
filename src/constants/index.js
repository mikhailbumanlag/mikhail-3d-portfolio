export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Apple - Website",
    desc: "This project is a comprehensive clone of Apple's website, built using ReactJS, Tailwind CSS, and GSAP for dynamic animations. The goal was to replicate the sleek, modern aesthetic of Apple's design while incorporating interactive features that enhance user experience.",
    subdesc:
      "The project features a responsive design built with Tailwind CSS, ensuring optimal viewing across all devices. It integrates 3D models of Apple products, animated using GSAP for a visually engaging experience. User interactions are enhanced through smooth hover effects and transitions, while React Router enables dynamic navigation between product pages. Additionally, the site is optimized for performance, delivering fast load times and fluid animations without sacrificing quality.",
    href: "https://mikhailbumanlag.github.io/apple-3d-clone/",
    texture: "textures/project/hightlight-fourth.mp4",
    logo: "assets/apple.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "GSAP",
        path: "assets/GSAP logo.jpg",
      },
    ],
  },
  {
    title: "UI Design Showcase on Behance",
    desc: "This project features a meticulously crafted UI design aimed at enhancing user engagement and experience across digital platforms. Presented on Behance, it showcases a modern aesthetic with a clean layout, vibrant color palette, and intuitive navigation.",
    subdesc:
      "This showcase not only highlights my design skills but also reflects a commitment to creating impactful user experiences that resonate with diverse audiences.",
    href: "https://www.behance.net/mikhailowen",
    texture: "textures/project/behance-project.mp4",
    logo: "assets/behance-white2.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Figma",
        path: "assets/figma.svg",
      },
      {
        id: 2,
        name: "Spline",
        path: "assets/spline.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Web Developer",
    pos: "Creative Tech & Web Developer",
    duration: "Present",
    title:
      "As a Web Developer and Creative Technologist, my daily tasks include writing and optimizing code for web applications, collaborating with designers to implement interactive features, conducting testing and debugging for cross-browser functionality, utilizing APIs for data integration, staying updated on emerging technologies, and participating in brainstorming sessions to generate innovative solutions for projects.",
    icon: "assets/react.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Marketing Campaign Specialist",
    pos: "Marketing Campaign Automation Specialist",
    duration: "2020 - 2024",
    title:
      "As a Marketing Campaign Automation Specialist, my daily tasks involve designing and implementing automated marketing campaigns, analyzing performance metrics to optimize strategies, segmenting customer lists for targeted messaging, creating engaging content for emails and social media, coordinating with cross-functional teams, and conducting A/B tests to enhance campaign effectiveness.",
    icon: "assets/framer.svg",
    animation: "salute",
  },
  {
    id: 3,
    name: "User Interface and User Experience Designer",
    pos: "UI/UX Designer",
    duration: "2018 - 2020",
    title:
      "As a UI/UX Designer, my daily tasks involve conducting user research to understand needs, creating wireframes and interactive prototypes in tools like Figma, collaborating with product managers and developers to align design goals, facilitating usability tests to gather feedback, maintaining design systems for consistency, producing high-fidelity mockups that adhere to branding guidelines, incorporating feedback from team members and stakeholders, and staying updated on the latest design trends and best practices.",
    icon: "assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 4,
    name: "Front-End Developer",
    pos: "Junior Front-End Developer",
    duration: "2017 - 2018",
    title:
      "As a Junior Front End Developer, my daily tasks include writing clean code in HTML, CSS, and JavaScript, collaborating with designers to implement user interfaces, conducting testing for cross-browser compatibility, using Git for version control, participating in daily stand-ups and sprint planning, updating project documentation, and staying informed about the latest web development trends.",
    icon: "assets/javascript.svg",
    animation: "salute",
  },
];
