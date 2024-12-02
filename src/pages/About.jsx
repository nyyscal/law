import Gap from "../components/Gap.jsx";
import Team from "../components/Team.jsx";
const About = () => {
  return (
    <div>
      <img
        src="./lawyer.jpg"
        alt=""
        className="w-screen h-[800px] flex items-center justify-center"
      />
      <Gap />
      <div className="bg-slate-600 flex flex-col md:flex-row w-[800] h-[800] items-center gap-6 p-6">
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
          <div className="max-w-[800px] mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 font-serif">Our Mission</h1>
            <p>
              "At Law Nepal, our mission is to offer exceptional legal services
              with a focus on integrity, professionalism, and client
              satisfaction. We are dedicated to understanding the unique needs
              of each client and providing tailored solutions across various
              areas of law.."
            </p>
            <p className="text-gray-400 mt-3">-Law Nepal, Kathmandu 2024</p>
          </div>
        </div>
      </div>
      <Team />
    </div>
  );
};
export default About;
