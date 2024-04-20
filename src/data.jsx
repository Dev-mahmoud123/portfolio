// *******   imports ********* //

import  imageOne  from "./assets/e-commerce.png";
import imageTwo  from "./assets/movie.png";
import  imageThree from "./assets/dashboard.png";
import  imageFour  from "./assets/product-management-sys.png";
import  imageFive from "./assets/template-two.png";
import  imageSix from "./assets/template-three.png";
import  imageSeven  from "./assets/template-four.png";
import  imageEight  from "./assets/template-five.png";
import  imageNine from "./assets/movie-app.png";
import  imageTen from "./assets/ecommerce-app.png";
import  imageElev from "./assets/prayer-timing.png";






//=============== SKILLS DATA ===============//

import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const skills = [
  {
    id: 1,
    skillName: "HTML",
    percent: 95,
  },
  {
    id: 2,
    skillName: "CSS",
    percent: 85,
  },
  {
    id: 3,
    skillName: "Javascript",
    percent: 75,
  },
  {
    id: 4,
    skillName: "React",
    percent: 70,
  },
  {
    id: 5,
    skillName: "Redux-toolkit",
    percent: 50,
  },
  {
    id: 6,
    skillName: "Tailwind Css",
    percent: 50,
  },
  {
    id: 7,
    skillName: "Git & Github",
    percent: 65,
  },
  {
    id: 8,
    skillName: "Java",
    percent: 30,
  },
];

//============= RESUME DATA ==============

export const resumeData = [
  {
    id: 1,
    category: "experience",
    title: "Data Entry",
    date: "Mars , 2022 - present",
    description: `I worked as data entry insert and update and delete data in system`,
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    id: 2,
    category: "experience",
    title: "Mobile Developer",
    date: "Feb , 2021 - Jun , 2021",
    description: `I worked as flutter developer , developed ui
                    and make app responsive in all screens and get data from api`,
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    id: 3,
    category: "education",
    title: "Chemistry Science",
    date: "2014 - 2018",
    description: `Holds a Bachelor’s degree from the Faculty of
              Science from Zagazig University in 2018 `,
    icon: <FontAwesomeIcon icon={faGraduationCap} p />,
  },
  {
    id: 4,
    category: "education",
    title: "High School Certificate",
    date: "2011 - 2014",
    description: `Holds the Egyptian General Secondary 
             Certificate from El Mahmoudia Secondary School`,
    icon: <FontAwesomeIcon icon={faGraduationCap} p />,
  },
];


export const portfolioData = [
  {
    id: 1,
    name: "new collections",
    image: imageOne,
    category: "web",
    link: 'https://new-collections.netlify.app/'
  },
  {
    id: 2,
    name: "movie website",
    image: imageTwo,
    category: "web",
    link: 'https://mah-react-movie.netlify.app/'
  },
  {
    id: 3,
    name: "prayers timing",
    image: imageElev,
    category: "web",
    link: 'https://prayers-time.netlify.app/'
  },
  {
    id: 4,
    name: "dashboard",
    image: imageThree,
    category: "web",
    link: 'https://dev-mahmoud123.github.io/dashboard-design/'
  },
  {
    id: 5,
    name: "management system",
    image: imageFour,
    category: "web",
    link: 'https://dev-mahmoud123.github.io/project-with-crud-operation/'
  },
  {
    id: 6,
    name: "kasper template",
    image: imageFive,
    category: "web",
    link: 'https://dev-mahmoud123.github.io/HTML_AND_CSS_TEMPLETE2/'
  },
  {
    id: 7,
    name: "template three",
    image: imageSix,
    category: "web",
    link: 'https://dev-mahmoud123.github.io/HTML_AND_CSS_template3/'
  },
  {
    id: 8,
    name: "bondi website",
    image: imageSeven,
    category: "web",
    link: 'https://dev-mahmoud123.github.io/bondi-website-with-bootstrap/'
  },
  {
    id: 9,
    name: "special website",
    image: imageEight,
    category: "web",
    link: 'https://dev-mahmoud123.github.io/design-with-html-and-css-and-js/'
  },
  {
    id: 10,
    name: "Movie App",
    image: imageNine,
    category: "app",
    link: 'https://github.com/Dev-mahmoud123/movie-app'
  },
  {
    id: 11,
    name: "shop app",
    image: imageTen,
    category: "app",
    link: 'https://github.com/Dev-mahmoud123/Shop-App'
  },
];
