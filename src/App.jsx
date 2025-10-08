// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
// import Footer from "./components/Footer.jsx";  // not needed if using SiteFooter
import ChannelsMarquee from "./components/ChannelsMarquee.jsx";
import LogosSwipeBar from "./components/LogosSwipeBar.jsx";
import SmoothLogosBar from "./components/SmoothLogosBar.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import PromoHero from "./components/PromoHero.jsx";
import ProgramsGrid from "./components/ProgramsGrid.jsx";
import StatsCounter from "./components/StatsCounter.jsx";
import TestimonialsSwipe from "./components/TestimonialsSwipe.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

import Contact from "./pages/Contact.jsx";
import ContactInfoCards from "./pages/ContactInfoCards.jsx";
import Packages from "./pages/Packages.jsx";
import Terms from "./pages/Terms.jsx"; // <-- added

// Home page sections
function Home() {
  return (
    <>
      <Hero />
      <div className="band" />
      <ChannelsMarquee />
      <LogosSwipeBar />
      <PromoHero />
      <StatsCounter />
      <Pricing />
      <SmoothLogosBar height={140} gap={22} />
      <HowItWorks />
      <ProgramsGrid />

      {/* Read from /public without the '/public' prefix */}
      <TestimonialsSwipe
        images={[
          "/public/client1.png",
          "/public/client2.png",
          "/public/client3.png",
          "/public/client1.png",
          "/public/client2.png",
        ]}
      />

      <FAQ />
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={
            <>
              <Contact />           {/* hero + form/text */}
              <ContactInfoCards />  {/* cards row */}
            </>
          }
        />
        <Route path="/packages" element={<Packages />} />
        <Route path="/policies/terms" element={<Terms />} /> {/* <-- added */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
