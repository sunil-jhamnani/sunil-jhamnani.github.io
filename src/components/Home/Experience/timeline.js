import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as OpenSourceIcon } from "./school.svg";

let timelineElements = [
  {
    id: 1,
    location: "Engineering Manager/Technical Lead",
    title: "Myntra Design Pvt. Ltd.",
    description:
      "<span>At Myntra, I have demonstrated my technical and leadership skills by driving key projects and initiatives. I am proficient in frontend technologies (JavaScript/ES6+, ReactJS, ReactNative) and backend systems (NodeJS, Java, Kotlin). I developed a design system from scratch, now used in about 10 web applications. My expertise includes microservice architecture, performance optimization, and frontend security</span>.<br><span>I have experience with cloud technologies (Azure, AWS, Kubernetes) and system design involving Redis Cache, Kafka, MySQL, and MongoDB. As a manager, I have formulated product and technology roadmaps, led a team of 8 engineers, and spearheaded initiatives like the Design System and Myntra Brand Store, improving acquisitions, NPS scores, and customer satisfaction.</span><br>Additionally, I contributed to creating an L&D platform and promote the use of cutting-edge technologies, currently working with Kong API Gateway, GitHub Copilot, and ClickHouse OLAP datastore.</span>",
    buttonText: "Live Web Application",
    date: "July 2019 - Present",
    link: "https://partners.myntrainfo.com/",
    icon: "work",
  },
  {
    id: 2,
    location: "Technical Lead/Developer",
    title: "Appliqué Design System",
    description:
      "At Myntra, I spearheaded the development of the Applique Design System from the ground up. This comprehensive design system has significantly enhanced our design and development workflows, ensuring consistency and efficiency across our web applications. Now open-sourced, Applique is utilized in approximately 10 web applications, streamlining UI/UX design processes and fostering collaboration among designers and developers. My work on Applique has not only improved performance and maintainability but also contributed to a more cohesive user experience across our platform.",
    buttonText: "Live Web Application",
    link: "https://applique.myntra.com/",
    date: "July 2019 - Present",
    icon: "open-source",
  },
  {
    id: 3,
    location: "Speaker & Co-Organizer",
    title: "React Meetup",
    description:
      "As a speaker at the React Meetup, I have had the experience of sharing my expertise on <b>design patterns in design systems</b> where I discussed its impact and provided valuable tips for designers and developers. Drawing from my extensive experience, I highlighted key design patterns and best practices that ensure <b>consistency, efficiency, and scalability</b> in large-scale web applications. My article on Medium, <a href='https://medium.com/@jhamnanisunil/design-system-in-action-at-myntra-tips-for-designers-and-developers-5edcf28b5bd4'><b>Design System in Action at Myntra: Tips for Designers and Developers</b></a>, further elaborates on these insights and has been well-received by the developer community. Engaging with fellow professionals at these meetups has been a rewarding experience, allowing me to contribute to the community and stay at the forefront of industry trends.",
    buttonText: "Talk Link",
    date: "10th Febrauary 2024",
    link: "https://www.youtube.com/watch?v=McqO4JP54Qg",
    icon: "speaker",
  },
  ,
  {
    id: 4,
    location: "Speaker",
    title: "FOSS United",
    description:
      "Another notable experience as a speaker was my talk at the FOSS United conference, founded by <b>Kailash Nadh, CTO of Zerodha</b>. In this conference, I discussed the significance of open source tools in modern development practices. I shared insights on how I leveraged tools like <b>salesforce-ux/theo</b> as a foundational platform to create a tokenizer for my design system, ensuring that design tokens are both efficient and meaningful. I also highlighted the utility of <b>oddbird/accoutrement</b> for maintaining meaningful design tokens.<br>Additionally, I demonstrated the capabilities of <b>Monaco Editor</b>, the open-source code editor that powers VS Code, showcasing its application as a live editor within our projects.",
    buttonText: "Talk Link",
    date: "18th November 2023",
    link: "https://sovran.video/w/aeSuM4K3aes4jjfHSwsZHx",
    icon: "speaker",
  },
  {
    id: 5,
    location: "Front End Developer",
    title: "BrowserStack",
    description:
      "At BrowserStack, I worked as a Frontend Engineer, enhancing the user experience and performance of key web tools. I contributed to the <b>Live tool</b> and the <b>billing and payments team</b>, developing the Role-Based Access Control (RBAC) system for secure user management. Additionally, I created <b>UI patterns</b> to improve usability and led the development of the <b>BrowserStack Chrome extension</b>. I also conducted training sessions on advanced frontend practices, promoting skill growth and knowledge sharing within the team.",
    buttonText: "Live Web Application",
    link: "https://www.browserstack.com/",
    date: "May 2017 - June 2019",
    icon: "work",
  },
  {
    id: 6,
    location: "Software Engineer",
    title: "InTimeTec",
    description:
      "I began my career as a Junior Software Engineer and quickly advanced to a Software Engineer role. During my time there, I developed new features, improved code quality, and conducted code reviews. I gained proficiency in AngularJS, JavaScript, jQuery, HTML5, and CSS, and worked on translating business requirements into functional specifications. Operating in an Agile-driven environment, I effectively maintained project timelines and utilized available resources to ensure successful project deliveries. My experience at InTimeTec laid a solid foundation for my technical skills and collaborative work ethic.",
    date: "July 2014 – May 2017",
    icon: "work",
  },
];

export default timelineElements;
