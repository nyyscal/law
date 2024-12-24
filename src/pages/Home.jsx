import React, { lazy, Suspense } from "react";
import Hero from "../components/User/Hero";
import Info from "../components/User/Info";
import Program from "../components/User/Program";
import Title from "../components/User/Title";
import Newsletter from "../components/User/Newsletter";
import Overview from "../components/User/Overview";
import Logo from "../components/User/Logo";
import ResponsiveCard from "../components/User/ResponsiveCard";

// Lazy load the Testimonials component
const Testimonials = lazy(() => import("../components/User/Testimonial"));
const ResponsiveCards = lazy(() => import("../components/User/ResponsiveCard"));

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Title title="Partners & Collaborators" />
      <Logo />
      <Info />
      <Title subTitle="Our Team" title="GET THE BEST CONSULTANT" />
      <Program />
      <Title title="WHY CHOOSE US?" />
      <Overview />
      <Title title="OUR SERVICES" />
      <Suspense fallback={<div>Loading Services...</div>}>
        <ResponsiveCards />
      </Suspense>
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense>
      <Newsletter />
    </div>
  );
};

export default Home;
