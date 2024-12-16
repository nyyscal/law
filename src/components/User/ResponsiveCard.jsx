import React from "react";
import Card from "./Card";
import MobileCard from "./MobileCard";

const ResponsiveCard = () => {
  const cardData = [
    {
      id: 1,
      title: "Real Estate Law",
      content:
        "In real estate law, a closing refers to the final step in a property transaction, where the buyer formally takes ownership, and the title is transferred.You may need a lawyer.",
      image: "/card/Tax.jpg",
    },
    {
      id: 2,
      title: "Divorce Settlement",
      content:
        "In a divorce, property division isn't always equal; some states follow the equitable distribution model, which means assets are divided fairly but not necessarily 50/50.",
      image: "/card/Divorce.png",
    },
    {
      id: 3,
      title: "Insurance Claims",
      content:
        "Insurance companies are required by law to act in good faith when processing claims, and failing to do so can result in penalties for bad faith claims handling.",
      image: "/card/Insurance.jpg",
    },
    {
      id: 4,
      title: "Tax Law",
      content:
        "The U.S. tax code is over 74,000 pages long, and tax law changes frequently, with over 4,000 amendments made in just the last decade.You may need a lawyer to fix the issue.",
      image: "/card/Tax.jpg",
    },
    {
      id: 5,
      title: "Immigration Law",
      content:
        "U.S. immigration law is complex, with more than 50 different visa categories for foreign nationals seeking entry to the U.S., including work, family, and student visas.",
      image: "/card/Immigration.jpg",
    },
    {
      id: 6,
      title: "Employment Law",
      content:
        "The Fair Labor Standards Act mandates that employees who work more than 40 hours in a week must be paid overtime unless they meet specific exemption criteria.",
      image: "/card/Employment.jpg",
    },
  ];

  const isMobile = window.innerWidth <= 768;

  return isMobile ? <MobileCard cardData={cardData} /> : <Card />;
};

export default ResponsiveCard;
