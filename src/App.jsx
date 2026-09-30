import { lazy, Suspense } from "react";
import { useEffect, useRef, useState } from "react";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Footer = lazy(() => import("./components/footer/Footer"));

const DeferredSection = ({ id, className, immediate = false, children }) => {
  const sectionRef = useRef(null);
  const [ready, setReady] = useState(immediate);

  useEffect(() => {
    if (ready || !sectionRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <section ref={sectionRef} id={id} className={className}>
      {ready ? children : null}
    </section>
  );
};

const App = () => {
  return (
    <div className="container">
      <Suspense
        fallback={<section className="pageSection loadingSection">Loading...</section>}
      >
        <DeferredSection id="home" className="pageSection" immediate>
          <Hero />
        </DeferredSection>
      </Suspense>

      <Suspense
        fallback={<section className="pageSection loadingSection">Loading...</section>}
      >
        <DeferredSection id="portfolio" className="pageSection">
          <Portfolio />
        </DeferredSection>
      </Suspense>

      <Suspense
        fallback={<section className="pageSection loadingSection">Loading...</section>}
      >
        <DeferredSection id="services" className="pageSection">
          <Services />
        </DeferredSection>
      </Suspense>

      <Suspense
        fallback={<section className="pageSection loadingSection">Loading...</section>}
      >
        <DeferredSection id="contact" className="pageSection pageSectionLast">
          <div className="contactPageShell">
            <Footer compact />
          </div>
        </DeferredSection>
      </Suspense>
    </div>
  );
};

export default App;
