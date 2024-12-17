import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const topics = [
    {
      id: "employment-law",
      title: "Employment Law",
      description:
        "The Fair Labor Standards Act (FLSA) mandates that employees who work more than 40 hours in a week must be paid overtime unless they meet specific exemption criteria.Employment law governs the relationship between employers and employees, ensuring that both parties comply with legal obligations and rights. It covers a wide range of topics, including workplace discrimination, wrongful termination, wage disputes, and employee benefits. Employment law also addresses issues such as workplace safety, harassment, and union representation. Laws in this field are designed to protect workers' rights while balancing the needs of employers, promoting fairness, and preventing exploitation or abuse in the workplace.",
      image: "/card/Employment.jpg",
    },
    {
      id: "real-estate-law",
      title: "Real Estate Law",
      description:
        "In real estate law, a closing refers to the final step in a property transaction, where the buyer formally takes ownership, and the title is transferred.Real estate law governs the buying, selling, and use of land and properties. It encompasses a broad range of issues, including property rights, leases, title disputes, zoning laws, and environmental regulations. Real estate law is critical for individuals and businesses involved in transactions involving commercial or residential properties, as well as those dealing with landlord-tenant relationships. Legal experts in this field help clients understand their rights, obligations, and legal protections related to property ownership and use, ensuring that deals are executed properly and in accordance with the law.",
      image: "/card/Tax.jpg",
    },
    {
      id: "divorce-settlement",
      title: "Divorce Settlement",
      description:
        "Divorce law deals with the dissolution of marriages. It includes legal guidance on asset division, child custody, alimony, and other related matters to ensure a fair resolution for all parties.Divorce law pertains to the legal processes surrounding the dissolution of marriage, helping individuals navigate the complexities of separation, property division, child custody, alimony, and spousal support. It addresses issues such as the equitable distribution of assets, child visitation rights, and the overall well-being of children in divorce cases. Divorce law is designed to ensure that the interests of both parties, especially children, are considered during the dissolution of marriage. Legal professionals specializing in divorce law offer guidance and representation throughout the emotional and legal challenges associated with ending a marriage.",
      image: "/card/Divorce.jpg",
    },
    {
      id: "insurance-claims",
      title: "Insurance Claims",
      description:
        "Insurance law focuses on the regulation of insurance policies and claims. It protects policyholders from unfair practices and ensures companies fulfill their obligations during claims.Insurance law regulates the practices of insurance companies and their policies, ensuring that they act in good faith and in compliance with applicable laws. This field covers a variety of insurance types, including health, life, auto, home, and liability insurance. Insurance law addresses the rights of policyholders, claims processes, and disputes between insurers and insured parties. Attorneys specializing in insurance law may help individuals and businesses file claims, resolve coverage disputes, or challenge denials of coverage. It also involves the regulatory framework that governs the insurance industry, ensuring fairness and transparency.",
      image: "/card/Insurance.jpg",
    },
    {
      id: "tax-law",
      title: "Tax Law",
      description:
        "Tax law governs how taxes are imposed, collected, and managed. It includes regulations on income tax, corporate tax, and other levies that ensure government funding for public services.Tax law involves the regulation of taxes levied by government authorities, guiding individuals and businesses on how to comply with tax obligations. It covers everything from income tax, corporate tax, and sales tax to estate tax and tax deductions. Tax law is constantly evolving, and changes in legislation can have significant effects on both personal and corporate finances. Professionals in tax law assist clients with tax planning, dispute resolution, audits, and ensuring compliance with local, state, and federal tax requirements.",
      image: "/card/Tax.jpg",
    },
    {
      id: "immigration-law",
      title: "Immigration Law",
      description:
        "Immigration law oversees the rules for entering and residing in a country. It addresses issues like visas, citizenship, asylum, and deportation to regulate migration effectively.Immigration law focuses on the legal processes surrounding the entry, stay, and removal of individuals in a country. This area of law deals with visas, asylum, work permits, green cards, and citizenship applications. It also addresses the rights of undocumented immigrants, family reunification, and deportation procedures. Immigration law can be complex, as it involves both national policies and international agreements.Legal professionals in this field help clients navigate the bureaucratic processes and advocate for their rights to remain in or enter a country.",
      image: "/card/Immigration.jpg",
    },
  ];

  const location = useLocation();
  const sectionRefs = useRef({});

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && sectionRefs.current[hash]) {
      sectionRefs.current[hash].scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black px-8 lg:px-20 py-10">
      <header className="text-center mb-16">
        <h1 className="text-4xl lg:text-3xl font-bold text-[#FFD700]">
          Legal Topics
        </h1>
        <p className="text-lg lg:text-lg text-white mt-2">
          Explore the essentials of various legal fields.
        </p>
      </header>

      <main>
        {topics.map((topic) => (
          <>
            <div
              key={topic.id}
              id={topic.id}
              ref={(el) => (sectionRefs.current[topic.id] = el)}
              className="flex flex-col lg:flex-row items-center mb-16 min-h-[400px]"
              style={{ minHeight: "400px" }} // Set a consistent height
            >
              {/* Parent Wrapper */}
              <div className="flex flex-col lg:flex-row items-center w-full">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-auto rounded-lg shadow-md mb-6 lg:mb-0 ml-10">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-[90%] h-auto rounded-lg"
                  />
                </div>

                {/* Text Section */}
                <div className="flex flex-col lg:ml-10 lg:mr-10 items-start w-full lg:w-1/2">
                  {/* Vertical Line */}
                  <div>
                    <div className="flex">
                      <div className="w-1 h-6 bg-[#FFD700] mr-2 mt-1"></div>
                      <h2 className="text-2xl lg:text-2xl font-semibold text-[#FFD700]">
                        {topic.title}
                      </h2>
                    </div>

                    <div className="mt-4 text-white lg:text-base max-h-96 overflow-y-hidden max-w-[95%]">
                      <p>{topic.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-8 border-t-2 border-[#FFD700] w-full" />
          </>
        ))}
      </main>
    </div>
  );
};

export default Services;
