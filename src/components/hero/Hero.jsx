import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "motion/react";
import useIsMobile from "../../hooks/useIsMobile";
import Shape from "./Shape";
import Speech from "./Speech";
import "./hero.css";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

function Hero() {
  const isMobile = useIsMobile();

  return (
    <div className="hero">
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I&apos;m Amit!</span>
        </motion.h1>

        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>
            Hey! I&apos;m a MERN stack developer
          </motion.h2>
          <motion.p variants={awardVariants}>
            Just designed a new 3D website.
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img
              variants={awardVariants}
              src="/award1.png"
              alt="Award badge 1"
              loading="lazy"
              decoding="async"
            />
            <motion.img
              variants={awardVariants}
              src="/award2.png"
              alt="Award badge 2"
              loading="lazy"
              decoding="async"
            />
            <motion.img
              variants={awardVariants}
              src="/award3.png"
              alt="Award badge 3"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </motion.div>

        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#portfolio"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="hSection right">
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/amit-kumar-giri-53008124a"
          >
            <img src="/linkedin.png" alt="LinkedIn" loading="lazy" decoding="async" />
          </motion.a>
          <motion.a variants={followVariants} href="https://twitter.com/Yellowamit">
            <img src="/twitter.png" alt="Twitter" loading="lazy" decoding="async" />
          </motion.a>
          <motion.a variants={followVariants} href="https://github.com/yellowamit">
            <img src="/github.png" alt="GitHub" loading="lazy" decoding="async" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>

        <Speech />

        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <a href="https://online.gndu.ac.in/">
            <img
              src="/certificate1.png"
              alt="Guru Nanak Dev University certificate"
              loading="lazy"
              decoding="async"
            />
          </a>
          Btech
          <br />
          Computer Science Engineering(2026)
          <br />
          Guru Nanak Dev University
        </motion.div>

        <motion.a
          href="#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="var(--color-soft)" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now -</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me -
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>

      {!isMobile && (
        <div className="bg">
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <Shape />
            </Suspense>
          </Canvas>
        </div>
      )}

      <div className="hImg">
        <img src="/hero.png" alt="Amit portrait" fetchPriority="high" />
      </div>
    </div>
  );
}

export default Hero;
