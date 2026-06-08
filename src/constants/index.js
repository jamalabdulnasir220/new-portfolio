import showqueue from '../assets/projects/showqueue-thumbnail.png'
import devconnectThumbnail from '../assets/projects/devconnect-thumbnail.png'
import ghanabiteThumbnail from '../assets/projects/ghanabite-thumbnail.png'
import resume from '../assets/resume.pdf'

export const HERO_CONTENT = `Hi, I'm Jamal Nasir 👋

Full-Stack Software Developer building modern web applications, scalable backend services, and cloud-native solutions.

Turning ideas into reliable products with React, Node.js, ASP.NET Core, Docker, and AWS.
`;

export const ABOUT_TEXT = `I'm Jamal Nasir, a Full-Stack Software Developer passionate about building modern web applications and scalable backend services.

With experience in React, Node.js, Express, MongoDB, PostgreSQL, and ASP.NET Core, I enjoy turning ideas into real-world products that deliver value to users. My work spans from developing responsive user interfaces and RESTful APIs to deploying production-ready applications on AWS and configuring cloud infrastructure.

I have built projects including e-commerce platforms, business management dashboards, marketplace applications, and administrative systems, while continuously expanding my knowledge of backend architecture, cloud computing, Docker, and system design.

I am driven by continuous learning, problem-solving, and creating software that is reliable, maintainable, and impactful. Currently, I am deepening my expertise in backend engineering, cloud technologies, and scalable system design while building projects that challenge me to grow as a developer.

When I'm not coding, you'll find me exploring new technologies, documenting my learning journey, and sharing insights with the developer community.
`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Engineer",
    company: "Pkay Software Consultancy",
    description: `Worked on MERN applications, developing and maintaining full-stack features with React.js, Node.js, Express, and MongoDB. Built responsive user interfaces, integrated frontend components with backend APIs, implemented application logic, and collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "Express", "MongoDB", "Redux"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Engineer & IT Technician",
    company: "Drivers and Vehicle Licensing Authority - Ghana",
    description: `Assisted in fixing minor software and network problems. Issued driver and rider licenses to vehicle owners.`,
    technologies: [
      "HTML",
      "CSS",
      "Microsoft Word",
      "Excel",
      "PowerPoint",
      "Networking",
    ],
  },
  {
    year: "2021 - 2022",
    role: "Team Lead",
    company: "Computer Engineering Department - KNUST",
    description: `Designed the software architecture. Wrote high-quality and maintainable code. Coordinated team activities and presented end-product to supervisor.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Show Booking plaform",
    image: showqueue,
    description:
      "ShowQueue is a modern movie booking platform that allows users to discover trending movies, explore show details, book cinema tickets, and reserve seats for upcoming screenings through a fast and intuitive user experience.",
    technologies: ["React", "TailwindCSS", "Javascript", "Inngest", "Node.js", "Express", "MongoDB"],
    live: 'https://moviestore-afrik.vercel.app',
    code: 'https://github.com/jamalabdulnasir220/movieStore'
  },
  {
    title: "Developer's Connect Platform",
    image: devconnectThumbnail,
    description:
      "DevConnect is a networking platform designed to help developers discover, connect, and collaborate with like-minded professionals. Inspired by the swipe-based experience of modern social platforms, users can browse developer profiles, express interest, build connections, and expand their professional network within the tech community.",
    technologies: ["React", "TailwindCSS", "Javascript", "Node.js", "Express", "MongoDB"],
    live: 'http://13.51.237.44/',
    code: 'https://github.com/jamalabdulnasir220/devConnect'
  },
  {
    title: "GhanaBite",
    image: ghanabiteThumbnail,
    description:
      "GhanaBite is a full-stack food ordering platform for discovering local Ghanaian restaurants, browsing authentic dishes, managing carts, processing secure Stripe payments, tracking live orders, and supporting restaurant operations through a manager dashboard.",
    technologies: ["React", "TailwindCSS", "Typescript", "Node.js", "MongoDB", "Auth0", "Stripe"],
    live: '#',
    code: '#'
  },

];

export const CONTACT = {
  address: "",
  phoneNo: "+233 54 657 384 9",
  email: "techwithjamal@gmail.com",
};

export const RESUME = {
  url: resume,
  filename: "resume",
};
