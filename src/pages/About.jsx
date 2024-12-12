import Gap from "../components/User/Gap.jsx";
import Logo from "../components/User/Logo.jsx";
import Team from "../components/User/Team.jsx";
import Testimonials from "../components/User/Testimonial.jsx";
import Title from "../components/User/Title.jsx";
const About = () => {
  return (
    <div className="bg-black mt-10">
      <Team />
      <Title title="Articles & Publications" className="mt-2" />
      <Logo />
      <div className="bg-black flex flex-col px-10 py-20 md:flex-row w-[800] h-[800] items-center gap-6 p-6">
        {/* Left Side: Image */}
        <div className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
          <img
            className="object-contain"
            width={700}
            height={700}
            src="/lawyer4.jpg"
            alt="Lawyer"
          />
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col md:flex-row text-xl justify-normal w-full md:w-1/2 p-4 text-left font-mono max-w-[900px]">
          {/* Content */}
          <div className="max-w-[800px] mx-auto px-4 flex items-center">
            {/* Mission Text */}
            <div>
              <div className="flex items-center">
                {/* Vertical Line */}
                <div className="w-1 border-l-4 border-[#FFD700] h-[30px] mr-3 mb-5"></div>
                <h1 className="text-3xl text-[#FFD700] font-bold mb-6 font-serif">
                  Our Mission
                </h1>
              </div>

              <p className="text-gray-200">
                "At Law Nepal, our mission is to offer exceptional legal
                services with a focus on integrity, professionalism, and client
                satisfaction. We are dedicated to understanding the unique needs
                of each client and providing tailored solutions across various
                areas of law.."
              </p>
              <p className="text-gray-400 mt-3">-Law Nepal, Kathmandu 2024</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};
export default About;
