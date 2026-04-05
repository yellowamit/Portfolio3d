import Counter from "./Counter";
import "./services.css";
import { motion, useInView } from "motion/react";
import { lazy, Suspense, useRef, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const ComputerModelContainer = lazy(() =>
  import("./computer/ComputerModelContainer")
);
const ConsoleModelContainer = lazy(() =>
  import("./console/ConsoleModelContainer")
);
const MugModelContainer = lazy(() => import("./mug/MugModelContainer"));

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 5,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Web Design",
    counter: 2,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "App development",
    counter: 1,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { margin: "-200px" });

  const renderModel = () => {
    if (currentServiceId === 1) return <ComputerModelContainer />;
    if (currentServiceId === 2) return <MugModelContainer />;

    return <ConsoleModelContainer />;
  };

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={13} text="Projects Completed" />
          <Counter from={0} to={30} text="Github Repos" />
        </div>
      </div>
      {!isMobile && (
        <div className="sSection right">
          <Suspense fallback={<div className="modelFallback">Loading model...</div>}>
            {renderModel()}
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Services;
