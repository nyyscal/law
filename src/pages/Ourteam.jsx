import Title from "../components/User/Title.jsx";
import { assets } from "../utils/assets.js";

const About2 = () => {
  return (
    <div className="bg-black mt-10">
      <Title title="Meet Our Legal Team" />
      {/* Image section */}
      <div className="bg-black px-4 py-10 flex flex-col gap-10 items-center">
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-12">
          {assets.slice(0, 2).map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-[18rem] h-[18rem] border-4 border-[#FFD700] object-fit"
              />
              <h3 className="mt-2 text-xl text-[#FFD700]">{member.name}</h3>
              <p className="text-gray-400 text-base">{member.designation}</p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-12 mt-6">
          {assets.slice(2, 5).map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-[18rem] h-[18rem] border-4 border-[#FFD700] object-fit"
              />
              <h3 className="mt-2 text-xl text-[#FFD700]">{member.name}</h3>
              <p className="text-gray-400 text-base">{member.designation}</p>
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div className="flex flex-wrap justify-center gap-12 mt-6">
          {assets.slice(5).map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-[18rem] h-[18rem] border-4 border-[#FFD700] object-fit"
              />
              <h3 className="mt-2 text-xl text-[#FFD700]">{member.name}</h3>
              <p className="text-gray-400 text-base">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About2;
