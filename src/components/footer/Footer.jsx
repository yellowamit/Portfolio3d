import "./footer.css";

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

const Footer = ({ compact = false }) => {
  return (
    <footer className={`siteFooter${compact ? " compact" : ""}`}>
      <div className="footerIntro">
        <p className="footerEyebrow">Website Footer</p>
        <h2>Amit Kumar Giri</h2>
        <p className="footerText">
          MERN stack developer focused on building responsive, fast, and useful
          web experiences.
        </p>
      </div>

      <div className="footerColumns">
        <div className="footerBlock">
          <p className="footerBlockTitle">Navigation</p>
          <a href="#home">Home</a>
          <a href="#portfolio">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footerBlock">
          <p className="footerBlockTitle">About</p>
          <p className="footerMuted">
            Available for freelance projects, internships, and product builds.
          </p>
          <a
            href="https://drive.google.com/file/d/1k_Dv3BfPmcHmkLfu-CtotUIyni_ykOI_/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="footerBlock footerBlockWide">
          <p className="footerBlockTitle">Connect</p>
          <div className="footerLinks footerLinksFlat">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                className="footerLinkRow"
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                <span className="footerLabel">{link.label}</span>
                <span className="footerValue">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
