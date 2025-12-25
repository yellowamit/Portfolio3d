import { useRef } from "react";
import "./portfolio.css";
import { motion, useInView } from "motion/react";

const items = [
  {
    id: 1,
    title: "Mental Health Chatbot",
    img: "/p1.jpg",
    desc: "A MERN stack application providing real-time mental health support using an AI chatbot. Integrated Google Gemini API, JWT-based authentication, speech-to-text functionality, and deployed using Render.",
    link:"https://mental-health-chatbot-2-wn3r.onrender.com/"
  },
  {
    id: 2,
    title: "Anonymous Social Media Platform",
    img: "/p2.jpg",
    desc: "A full-stack anonymous posting platform built with Node.js, Express, EJS, and MongoDB. Supports email/password login and Google OAuth 2.0, session management, and public content sharing without revealing user identity.",
    link:"https://anonymous-social-media.onrender.com/"
  },
  {
    id: 3,
    title: "Bouncing Ball Game",
    img: "/p3.jpg",
    desc: "An interactive browser-based game developed using vanilla JavaScript and the Canvas API. Features smooth animations with mouse and touch-based controls, deployed using Render.",
    link:"https://yellowamit.github.io/BouncingBallGame/"
  },
];

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Portfolio = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Latest Projects(for more visit github)</h1>
        <motion.div
           style={{ scaleX: isInView ? 1 : 0 }} 
           className="progressBar"
        ></motion.div>
      </div>
      <motion.div 
        className="pContainer" 
        variants={variants} 
        initial="initial" 
        animate={isInView ? "animate" : "initial"}
      >
        {items.map((item) => (
          <motion.div className="pItem" key={item.id} variants={variants}>
            <div className="pImage">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="pText">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;