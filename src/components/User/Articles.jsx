import React from "react";
import { docs } from "../../utils/assets"; // Assuming your assets are in a separate file
import Title from "./Title";

const Articles = () => {
  const logos = [
    "/logo/logo2.png",
    "/logo/logo2.png",
    "/logo/logo2.png",
    "/logo/logo2.png",
  ]; // Array of logos
  const docMapping = [
    { logoIndex: 0, doc: docs[0].doc1, name: docs[0].name }, // Logo 1 maps to FIR Report
    { logoIndex: 1, doc: docs[1].doc1, name: docs[1].name }, // Logo 2 maps to Company Registration
    { logoIndex: 2, doc: docs[2].doc1, name: docs[2].name }, // Logo 3 maps to Court Marriage
    { logoIndex: 3, doc: docs[3].doc1, name: docs[3].name }, // Logo 4 maps to Foreign Court Marriage
  ];

  const openDocument = (docUrl) => {
    window.open(docUrl, "_blank"); // Opens the document in a new tab
  };

  return (
    <div className="relative text-white bg-black mt-20 sm:mt-0">
      <Title title="Articles & Publications" />

      {/* Desktop view */}
      <div className="hidden sm:block overflow-hidden w-full h-auto relative mt-2 sm:mt-10">
        <div className="flex justify-center items-center">
          {logos.map((logo, index) => (
            <div
              key={`desktop-${index}`}
              className="w-[20%] flex-shrink-0 flex flex-col justify-center items-center h-auto"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-32 w-auto object-contain cursor-pointer"
                onClick={() => openDocument(docMapping[index].doc)} // Open the corresponding document when clicked
              />
              <p className="text-center text-sm mt-4">
                {docMapping[index].name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden overflow-hidden w-full h-auto relative">
        <div className="grid grid-cols-2 gap-4 justify-center items-center p-4">
          {logos.map((logo, index) => (
            <div
              key={`mobile-${index}`}
              className="flex flex-col justify-center items-center"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-auto object-contain cursor-pointer"
                onClick={() => openDocument(docMapping[index].doc)} // Open the corresponding document when clicked
              />
              <p className="text-center text-sm mt-4">
                {docMapping[index].name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
