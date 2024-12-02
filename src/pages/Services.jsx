import React, { useState } from "react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceDetails, setServiceDetails] = useState({
    title: "",
    description: "",
  });

  const services = [
    {
      title: "Litigation",
      shortDescription:
        "Our expert litigation team provides effective representation in both civil and criminal matters.",
      fullDescription:
        "Our expert litigation team provides effective representation in both civil and criminal matters. We are committed to achieving the best possible outcomes for our clients, whether it's defending a lawsuit or pursuing legal action.",
    },
    {
      title: "Corporate Law",
      shortDescription:
        "Our corporate law services help businesses navigate complex legal issues, from mergers to dispute resolution.",
      fullDescription:
        "Our corporate law services help businesses navigate complex legal issues, from mergers and acquisitions to compliance and dispute resolution. We guide our clients through the intricacies of corporate law to safeguard their interests.",
    },
    {
      title: "Family Law",
      shortDescription:
        "We provide compassionate support in matters like divorce, child custody, and alimony.",
      fullDescription:
        "Our family law experts provide compassionate, knowledgeable support in matters such as divorce, child custody, and alimony, ensuring the best interests of all parties involved. We help families navigate emotional and legal challenges.",
    },
    {
      title: "Real Estate Law",
      shortDescription:
        "Our real estate lawyers ensure that property transactions comply with the law and protect your interests.",
      fullDescription:
        "Whether you're buying, selling, or leasing property, our real estate lawyers ensure all aspects of your transaction comply with the law and protect your interests. We offer legal services for property disputes, contracts, and agreements.",
    },
    {
      title: "Intellectual Property",
      shortDescription:
        "We help protect your intellectual property, including patents, trademarks, and copyrights.",
      fullDescription:
        "We offer a full range of services to protect your intellectual property, including patents, trademarks, and copyrights. We assist in ensuring your creative works are safeguarded from infringement and misappropriation.",
    },
    {
      title: "Employment Law",
      shortDescription:
        "We help both employers and employees navigate issues such as workplace discrimination and wrongful termination.",
      fullDescription:
        "Our employment law team helps both employers and employees navigate issues such as workplace discrimination, wrongful termination, and employment contracts. We aim to resolve conflicts fairly and efficiently.",
    },
  ];

  const openModal = (title, fullDescription) => {
    setServiceDetails({
      title: title,
      description: fullDescription,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[url('/background5.jpg')] bg-cover bg-center bg-opacity-30 w-full py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-xl text-white mb-12">
          We offer a range of expert legal services tailored to meet the diverse
          needs of our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#212EA0] mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-gray-950 mb-4">
                {service.shortDescription}
              </p>
              <button
                className="bg-[#212EA0] text-white px-6 py-2 rounded-lg mt-4 hover:bg-[#256EA0] transition-all"
                onClick={() =>
                  openModal(service.title, service.fullDescription)
                }
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-4xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 relative">
            {/* Modal Header with X Button */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-semibold text-[#212EA0]">
                {serviceDetails.title}
              </h2>
              <button
                className="text-2xl text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            {/* Separator Line */}
            <hr className="my-4 border-t-2 border-[#212EA0]" />
            <p className="text-lg text-gray-950 mb-6">
              {serviceDetails.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
