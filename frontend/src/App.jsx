import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servies from "./pages/Servies";
import ContactPage from "./pages/ContactPage";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import LoadingScreen from "./components/LoadingScreen";
import EmailTempalte from "./pages/EmailTempalte";
import Thankyou from "./pages/Thankyou";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenisRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smooth: true,
    });

    lenis.stop();
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => lenis.destroy();
  }, []);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setLoaded(true);
      lenisRef.current?.start();
      lenisRef.current?.scrollTo(0, { immediate: true });
    }, 1000); // 2 seconds
  };
  // const handleLoadingComplete = () => {
  //   setLoaded(true);
  //   lenisRef.current?.start();
  //   lenisRef.current?.scrollTo(0, { immediate: true });
  // };

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadingComplete} />}

      {loaded && (
        <Routes>
          <Route path="/" element={<Home lenis={lenisRef} />} />
          <Route
            path="/servies/:WorkName"
            element={<Servies lenis={lenisRef} />}
          />
          <Route
            path="/contact-page"
            element={<ContactPage lenis={lenisRef} />}
          />
          <Route path="/template" element={<EmailTempalte />} />
          <Route path="/Thank-You" element={<Thankyou />} />
        </Routes>
      )}
    </>
  );
};

export default App;
