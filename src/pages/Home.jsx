import React from "react";
import Hero from "../components/User/Hero";
import Info from "../components/User/Info";
import Program from "../components/User/Program";
import Title from "../components/User/Title";
import Testimonials from "../components/User/Testimonial";
import Newsletter from "../components/User/Newsletter";
import Overview from "../components/User/Overview";
import Logo from "../components/User/Logo";
import Card from "../components/User/Card";
import ResponsiveCard from "../components/User/ResponsiveCard";
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
      <ResponsiveCard />

      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
