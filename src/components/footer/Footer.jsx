import "./footer.css";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const titleVariants = {
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

const emailVariants = {
  initial: {
    x: -80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.9,
    },
  },
};

const connectVariants = {
  initial: {
    x: 70,
    opacity: 0,
  },
  animate: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.25 + index * 0.08,
      duration: 0.65,
    },
  }),
};

const footerLinks = [
  {
    label: "Email",
    href: "mailto:mail2amikg@gmail.com",
    value: "mail2amikg@gmail.com",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1k_Dv3BfPmcHmkLfu-CtotUIyni_ykOI_/view?usp=drive_link",
    value: "View Resume",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amit-kumar-giri-53008124a",
    value: "amit-kumar-giri",
  },
  {
    label: "GitHub",
    href: "https://github.com/yellowamit",
    value: "yellowamit",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/Yellowamit",
    value: "@Yellowamit",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/yellowamit/",
    value: "yellowamit",
  },
];

const navigationLinks = [
  ["Home", "#home"],
  ["Projects", "#portfolio"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

const Footer = ({ compact = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <footer ref={ref} className={`siteFooter${compact ? " compact" : ""}`}>
      <div className="footerMainGrid">
        <div className="footerAbout">
          <motion.h1
            variants={titleVariants}
            animate={isInView ? "animate" : "initial"}
            className="footerAboutTitle"
          >
            About
          </motion.h1>
          <p className="footerMuted">
            Available for freelance projects, internships, and jobs.
          </p>
          <a
            className="resumeLink"
            href="https://drive.google.com/file/d/1k_Dv3BfPmcHmkLfu-CtotUIyni_ykOI_/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
          <motion.a
            variants={emailVariants}
            animate={isInView ? "animate" : "initial"}
            className="emailCta"
            href="mailto:mail2amikg@gmail.com?subject=Project%20inquiry%20for%20Amit"
          >
            <span className="emailCtaLabel">Connect me via email</span>
            <span className="emailCtaAddress">mail2amikg@gmail.com</span>
            <span className="emailCtaArrow" aria-hidden="true">↗</span>
          </motion.a>
        </div>

        <section className="footerConnect" aria-labelledby="connect-title">
          <p id="connect-title" className="footerBlockTitle">Connect</p>
          <div className="footerLinks footerLinksFlat">
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.label}
                custom={index}
                variants={connectVariants}
                animate={isInView ? "animate" : "initial"}
                className="footerLinkRow"
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                <span className="footerLabel">{link.label}</span>
                <span className="footerValue">{link.value}</span>
              </motion.a>
            ))}
          </div>
        </section>
      </div>

      <nav className="footerNavigation" aria-label="Footer navigation">
        <p className="footerBlockTitle">Navigation</p>
        <div className="navigationLinks">
          {navigationLinks.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
