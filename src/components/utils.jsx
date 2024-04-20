import { faEnvelopeOpen, faFolderOpen, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


/// ================= links of pages routes ===============
export const links = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHome} className="nav__icon" />,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    icon: <FontAwesomeIcon icon={faUser} className="nav__icon" />,
  },
  
  {
    id: 4,
    title: "Portfolio",
    path: "/portfolio",
    icon: <FontAwesomeIcon icon={faFolderOpen} className="nav__icon" />,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} className="nav__icon" />,
  },
];


//  ===========  colors ================

export const colors = [
  {
    id : 1 , 
    color : "rgb(37, 150, 190)"
  },
  {
    id : 2 , 
    color : "rgb(26, 87, 185, 1)"
  },
  {
    id : 3 , 
    color : "rgb(185, 26, 171, 1)"
  },
  {
    id : 4 , 
    color : "rgb(185, 26, 115, 1)"
  },
  {
    id : 5 , 
    color : "rgb(26, 185, 160, 1)"
  },
  {
    id : 6 , 
    color : "rgb(26, 185, 154, 1)"
  },
  {
    id : 7 , 
    color : "rgb(185, 26, 87, 1)"
  },
  {
    id : 8 , 
    color : "rgb(60, 26, 185, 1)"
  },
]
