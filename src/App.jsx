import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      <Suspense
        fallback={<section className="pageSection loadingSection">Loading...</section>}
      >
        <section id="home" className="pageSection">
          <Hero />
        </section>
      </Suspense>

      <Suspense
        fallback={<section className="pageSection loadingSection">Loading...</section>}
      >
        <section id="portfolio" className="pageSection">
          <Portfolio />
        </section>
      </Suspense>

      <Suspense
        fallback={<section className="pageSection loadingSection">Loading...</section>}
      >
        <section id="services" className="pageSection">
          <Services />
        </section>
      </Suspense>

      <Suspense
        fallback={<section className="pageSection loadingSection">Loading...</section>}
      >
        <section id="contact" className="pageSection">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default App;
