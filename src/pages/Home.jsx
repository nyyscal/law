import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Program from "../components/Program";
import Title from "../components/Title";
import Testimonials from "../components/Testimonial";
const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <Title subTitle="Our Services" title="PRACTICE AREAS" />
      <Program />
      <Title subTitle="Testimonials" title="What our client says" />
      <Testimonials />
    </div>
  );
};

export default Home;
