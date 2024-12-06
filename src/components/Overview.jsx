import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0a0707] flex flex-col md:flex-row w-[800] h-[800] items-center gap-6 p-6">
      {/* Left Side: Image */}
      <div className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
        <img
          className="object-contain border border-white"
          width={700}
          height={700}
          src="/overview.jpg"
          alt="Overview"
        />
      </div>

      {/* Right Side: Text */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-4 text-center font-mono">
        <h1 className="text-4xl font-bold mb-6 font-serif text-white">
          Why Choose Our Law Firm?
        </h1>
        <ul className="space-y-4 text-left text-lg text-white">
          <li className="flex items-center">
            <img src="/check.svg" alt="check" className="mr-2" />
            <b>Experience:</b>&nbsp; Over a decade of successful case outcomes.
          </li>
          <li className="flex items-center">
            <img src="/check.svg" alt="check" className="mr-2" />
            <b>Personalized Service:</b>&nbsp; Every client is unique, we treat
            you as such.
          </li>
          <li className="flex items-center">
            <img src="/check.svg" alt="check" className="mr-2" />
            <b>Transparent Pricing:</b>&nbsp; No hidden fees or unexpected
            charges.
          </li>
          <li className="flex items-center">
            <img src="/check.svg" alt="check" className="mr-2" />
            <b>Award-Winning Team:</b>&nbsp;Our attorneys have been recognized
            by legal bodies both locally and nationally.
          </li>
        </ul>
        <button
          className="w-full mt-4 max-w-[200px] px-6 py-3 bg-[#FFD700] text-white font-serif hover:scale-105 transform transition-all duration-300 ease-in-out"
          onClick={() => navigate("/services")}
        >
          Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Overview;
