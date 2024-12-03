import Hero from "../components/Hero";
import Info from "../components/Info";
import Program from "../components/Program";
import Title from "../components/Title";
import Testimonials from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Gap from "../components/Gap";
import Overview from "../components/Overview";
const Home = () => {
  return (
    <div className="bg-slate-100">
      <Hero />
      <Info />
      <Title subTitle="Our Services" title="PRACTICE AREAS" />
      <Program />
      <Title subTitle="Our vow" title="Why choose us?" />
      <Overview />
      <Title subTitle="Testimonials" title="What our client says" />
      <Testimonials />
      <Newsletter />
      <Gap />
    </div>
  );
};

export default Home;
