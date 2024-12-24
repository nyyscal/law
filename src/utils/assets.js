import founder from "/team/hero.jpg"
import criminalLaw from "/team/criminalLaw.jpg"
import corporate from "/team/corporate.jpg"
import senior1 from "/team/senior.jpg"
import senior2 from "/team/sassociate.jpg"
import CA from "/team/CA.jpg"
import associate from "/team/associate.jpg"
import builders from "/team/builders.jpg"

import fir from "/documents/FIR.pdf"
import company from "/documents/CompanyRegestration.pdf"
import foreign from "/documents/ForeignPolicy.pdf"
import court from "/documents/CourtMarrige.pdf"

export const assets =[
  {
    id:1,
    name:"Sagar G.C.",
    designation:"Founder",
    image:founder,
    contact:98012345687,
    mail:"contact@info.com",
},{
  id:2,
  name:"Samba Raj Aryal",
  designation:"Criminal Law Expert",
  image:criminalLaw,
  contact:98012345687,
  mail:"contact@info.com",
},{
  id:3,
  name:"Rajkumar Khatiwada",
  designation:"Corporate Law Expert",
  image:corporate,
  contact:98012345687,
  mail:"contact@info.com",
},{
  id:4,
  name:"Ram Pandit",
  designation:"Senior Associate",
  image:senior1,
  contact:98012345687,
  mail:"contact@info.com",
},{
  id:5,
  name:"Bijay Sharma Khatiwada",
  designation:"Senior Assocaite",
  image:senior2,
  contact:98012345687,
  mail:"contact@info.com",
},{
  id:6,
  name:"Ashish Rai Sunuwar",
  designation:"CA",
  image:CA,
  contact:98012345687,
  mail:"contact@info.com",
},{
  id:7,
  name:"Ram Krishna Dangal",
  designation:"Associate",
  image:associate,
  contact:98012345687,
  mail:"contact@info.com",
},{
  id:8,
  name:"Builders Academy",
  designation:"IT Consultant",
  image:builders,
  contact:98012345687,
  mail:"contact@info.com",
}]

export const docs = [
  {
    id:1,
    doc1:fir,
    name:"FIR Report"
},
  {
    id:2,
    doc1:company,
    name:"Company Regestration"
},
  {
    id:3,
    doc1:court,
    name:"Court Marrige"
},
  {
    id:4,
    doc1:foreign,
    name:"Foreign Person Court Marrige"
},
]

export const cardData = [
    {
      id: 1,
      title: "Real Estate Law",
      content:
        "In real estate law, a closing refers to the final step in a property transaction, where the buyer formally takes ownership, and the title is transferred.",
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
        "The U.S. tax code is over 74,000 pages long, and tax law changes frequently, with over 4,000 amendments made in just the last decade.",
      image: "/card/Tax.jpg",
    },
    {
      id: 5,
      title: "Immigration Law",
      content:
        "U.S. immigration law is complex, with more than 50 different visa categories for foreign nationals seeking entry to the U.S., including work, family.",
      image: "/card/Immigration.jpg",
    },
    {
      id: 6,
      title: "Employment Law",
      content:
        "The Fair Labor Standards Act mandates that employees who work more than 40 hours in a week must be paid overtime unless  including work, family, and student visas..",
      image: "/card/Employment.jpg",
    },
  ];

   // Data for the list items
   export const listItems = [
    { title: "Experienced Team", description: "Over 7+ years of experience." },
    {
      title: "Personalized Service",
      description: "Every client is unique, we treat you as such.",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees or unexpected charges.",
    },
    {
      title: "Award-Winning",
      description: "Our attorneys have been recognized by legal bodies.",
    },
  ];

  export const slides = [
      {
        image: "/lawyer1.jpg",
        text: `"As a proud member of this firm, I can confidently say that we are dedicated to providing the highest standard of legal representation. Our team is built on a foundation of integrity, professionalism, and respect for our clients.  It's an honor to help protect the rights and interests of those we serve."`,
        name: "Theresa May",
        designation: "Senior Lawyer",
      },
      {
        image: "/lawyer2.jpg",
        text: `"At our firm, we work tirelessly to achieve the best outcomes for our clients. Whether in the courtroom or through legal counsel, we strive to make complex matters simple and manageable. Our team’s expertise spans a variety of legal fields, allowing us to offer diverse solutions. "`,
        name: "Jane Smith",
        designation: "Legal Consultant",
      },
      {
        image: "/lawyer3.1.jpg",
        text: `"I am proud to be part of a firm that prioritizes the well-being and success of its clients. We approach each case with dedication and a commitment to excellence. From legal consultation to representation, we offer comprehensive services that meet the needs of individuals and businesses alike. "`,
        name: "Alex Brown",
        designation: "Managing Partner",
      },
    ];

    //Services Component 
 
      export const topics = [
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

//Testimonials 
export const testimonials = [
  {
    image: "/testimonial/user-1.png",
    name: "Jessica Thompson",
    company: "Thompson & Co., USA",
    text: "The team at this law firm provided outstanding legal representation during a very stressful time. They were compassionate, professional, and always kept me informed throughout the process. I couldn't be more grateful for their expertise and dedication.",
  },
  {
    image: "/testimonial/user-2.png",
    name: "Michael Rogers",
    company: "Rogers Law Group, UK",
    text: "The team at this law firm provided outstanding legal representation during a very stressful time. They were compassionate, professional, and always kept me informed throughout the process. I couldn't be more grateful for their expertise and dedication.",
  },
  {
    image: "/testimonial/user-3.png",
    name: "Sophia Carter",
    company: "Carter Legal Services, Canada",
    text: "The team at this law firm provided outstanding legal representation during a very stressful time. They were compassionate, professional, and always kept me informed throughout the process. I couldn't be more grateful for their expertise and dedication.",
  },
  {
    image: "/testimonial/user-4.png",
    name: "/testimonial/user-1.png",
    company: "Brown & Associates, Australia",
    text: "The team at this law firm provided outstanding legal representation during a very stressful time. They were compassionate, professional, and always kept me informed throughout the process. I couldn't be more grateful for their expertise and dedication.",
  },
  {
    image: "/testimonial/user-2.png",
    name: "Bart Simpson",
    company: "Thompson & Co., USA",
    text: "The team at this law firm provided outstanding legal representation during a very stressful time. They were compassionate, professional, and always kept me informed throughout the process. I couldn't be more grateful for their expertise and dedication.",
  },
  {
    image:"/testimonial/user-1.png",
    name: "Peter Griffin",
    company: "Rogers Law Group, UK",
    text: "The team at this law firm provided outstanding legal representation during a very stressful time. They were compassionate, professional, and always kept me informed throughout the process. I couldn't be more grateful for their expertise and dedication.",
  },
];