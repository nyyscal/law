import founder from "/team/hero.jpg"
import criminalLaw from "/team/criminalLaw.jpg"
import corporate from "/team/corporate.jpg"
import senior1 from "/team/senior.jpg"
import senior2 from "/team/sassociate.jpg"
import CA from "/team/CA.jpg"
import associate from "/team/associate.jpg"
import builders from "/team/builders.jpg"
import saugat from "/team/Saugat.jpg"
import managing from "/team/managing.jpg"
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

},{
  id:2,
  name:"Samba Raj Aryal",
  designation:"Criminal Law Expert",
  image:criminalLaw,

},{
  id:3,
  name:"Rajkumar Khatiwada",
  designation:"Corporate Law Expert",
  image:corporate,

},
{
  id:3,
  name:"Dinesh Rokka",
  designation:"Managing Partner",
  image:managing,

},{
  id:4,
  name:"Saugat Jung Pandey",
  designation:"Human Right Practice & Policy Consultant",
  image:saugat,

},{
  id:5,
  name:"Ram Pandit",
  designation:"Senior Associate",
  image:senior1,

},{
  id:6,
  name:"Bijay Sharma Khatiwada",
  designation:"Senior Assocaite",
  image:senior2,

},{
  id:7,
  name:"Ram Krishna Dangal",
  designation:"Associate",
  image:associate,

},{
  id:8,
  name:"Ashish Rai Sunuwar",
  designation:"CA",
  image:CA,

},{
  id:9,
  name:"Builders Academy",
  designation:"IT Consultant",
  image:builders,

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
            "The Fair Labor Standards Act (FLSA) mandates that employees who work more than 40 hours in a week must be paid overtime unless they meet specific exemption criteria.Employment law governs the relationship between employers and employees, ensuring that both parties comply with legal obligations and rights. It covers a wide range of topics, including workplace discrimination, wrongful termination, wage disputes, and employee benefits. Employment law also addresses issues such as workplace safety, harassment, and union representation. ",
          image: "/card/Employment.webp",
        },
        {
          id: "real-estate-law",
          title: "Real Estate Law",
          description:
            "In real estate law, a closing refers to the final step in a property transaction, where the buyer formally takes ownership, and the title is transferred.Real estate law governs the buying, selling, and use of land and properties. It encompasses a broad range of issues, including property rights, leases, title disputes, zoning laws, and environmental regulations. Real estate law is critical for individuals and businesses involved in transactions involving commercial or residential properties, as well as those dealing with landlord-tenant relationships. ",
          image: "/card/Tax.webp",
        },
        {
          id: "divorce-settlement",
          title: "Divorce Settlement",
          description:
            "Divorce law deals with the dissolution of marriages. It includes legal guidance on asset division, child custody, alimony, and other related matters to ensure a fair resolution for all parties.Divorce law pertains to the legal processes surrounding the dissolution of marriage, helping individuals navigate the complexities of separation, property division, child custody, alimony, and spousal support. It addresses issues such as the equitable distribution of assets, child visitation rights, and the overall well-being of children in divorce cases. Divorce law is designed to ensure that the interests of both parties, especially children, are considered during the dissolution of marriage. ",
          image: "/card/Divorce.webp",
        },
        {
          id: "insurance-claims",
          title: "Insurance Claims",
          description:
            "Insurance law focuses on the regulation of insurance policies and claims. It protects policyholders from unfair practices and ensures companies fulfill their obligations during claims.Insurance law regulates the practices of insurance companies and their policies, ensuring that they act in good faith and in compliance with applicable laws. This field covers a variety of insurance types, including health, life, auto, home, and liability insurance. Insurance law addresses the rights of policyholders, claims processes, and disputes between insurers and insured parties. ",
          image: "/card/Insurance.webp",
        },
        {
          id: "tax-law",
          title: "Tax Law",
          description:
            "Tax law governs how taxes are imposed, collected, and managed. It includes regulations on income tax, corporate tax, and other levies that ensure government funding for public services.Tax law involves the regulation of taxes levied by government authorities, guiding individuals and businesses on how to comply with tax obligations. It covers everything from income tax, corporate tax, and sales tax to estate tax and tax deductions. Professionals in tax law assist clients with tax planning, dispute resolution, audits, and ensuring compliance with local, state, and federal tax requirements.",
          image: "/card/Tax1.webp",
        },
        {
          id: "immigration-law",
          title: "Immigration Law",
          description:
            "Immigration law oversees the rules for entering and residing in a country. It addresses issues like visas, citizenship, asylum, and deportation to regulate migration effectively.Immigration law focuses on the legal processes surrounding the entry, stay, and removal of individuals in a country. This area of law deals with visas, asylum, work permits, green cards, and citizenship applications. It also addresses the rights of undocumented immigrants, family reunification, and deportation procedures. Immigration law can be complex, as it involves both national policies and international agreements.",
          image: "/card/Immigration.webp",
        },{
          id: "immigration-law",
          title: "Corporate Compliance",
          description:
            "Corporate compliance is essential to avoid legal risks and regulatory penalties.We assist in developing internal policies, ensuring adherence to local and global standards.Our team provides audits and reviews to identify and address compliance gaps.We specialize in areas such as anti-corruption, data protection, and industry-specific regulations.Ongoing support ensures your business remains compliant in an evolving legal landscape.Trust us to safeguard your operations and uphold your corporate integrity.",
          image: "/card/corporate-compliance.webp",
        },{
          id: "immigration-law",
          title: "Criminal & Civil Litigation",
          description:
            "We provide skilled representation in criminal and civil litigation, focusing on achieving the best possible outcomes for our clients.Our team handles cases with precision, from pre-trial negotiations to courtroom advocacy.In criminal matters, we ensure robust defense strategies to protect your rights.For civil cases, we pursue justice and remedies for disputes involving contracts, property, and more.We prioritize client communication, keeping you informed every step of the way.With our expertise, you can navigate complex legal proceedings with confidence.",
          image: "/card/civil-law.webp",
        },{
          id: "immigration-law",
          title: "Legal Research & Opinion",
          description:
            "Our legal research services offer deep insights into complex legal challenges.We provide tailored legal opinions to help clients make informed decisions.Our team analyzes statutes, case laws, and precedents relevant to your case.Whether it’s for litigation, contracts, or regulatory compliance, our advice is precise.We help bridge gaps in understanding intricate legal frameworks.Count on us for thorough research and practical solutions to your legal queries.",
          image: "/card/legalresearch.webp",
        },{
          id: "immigration-law",
          title: "Drafting & Negotiation of Commercial Contracts",
          description:
            "Effective contracts are the backbone of successful business relationships.We draft comprehensive commercial agreements tailored to your specific needs.Our team ensures contracts are clear, enforceable, and aligned with your goals.We specialize in negotiating terms to achieve balanced and favorable outcomes.From vendor agreements to joint ventures, we handle all contract types.Protect your business interests with our expert drafting and negotiation services.",
          image: "/card/drafting.webp",
        },{
          id: "immigration-law",
          title: "Court Marriage",
          description:
            "Court marriage is a straightforward and legally binding process.We guide couples through the required documentation and procedural steps.Our services ensure compliance with the Marriage Act and other legal norms.From filing applications to obtaining the marriage certificate, we handle it all.We provide a smooth experience, respecting your privacy and time.Start your journey together with hassle-free court marriage assistance.",
          image: "/card/court-marriage.webp",
        },{
          id: "immigration-law",
          title: "Foreign Direct Investment & Business Incorporation",
          description:
            "Entering a new market requires strategic legal guidance.We assist foreign investors in navigating FDI regulations and opportunities.Our team handles company registration, licensing, and compliance requirements.We ensure seamless incorporation of businesses in line with local laws.With our support, you can focus on growth while we handle legal complexities.Achieve success in global markets with our expert assistance.",
          image: "/card/fdi.webp",
        },{
          id: "immigration-law",
          title: "Intellectual Property",
         description:
            "Your intellectual property deserves robust protection in a competitive market.We assist with trademark registration, copyright protection, and patent filing.Our team ensures that your IP rights are enforced against infringement.We provide strategic advice for managing and monetizing your intellectual assets.From startups to established businesses, we offer tailored IP solutions.Protect your ideas and creations with our comprehensive legal support.",
          image: "/card/copyright.webp",
        },
        {
          id: "immigration-law",
          title: "Mergers and Acquisitions",
         description:
            "Mergers and acquisitions involve intricate legal and financial considerations.We guide businesses through due diligence, ensuring informed decision-making.Our team assists in structuring deals, drafting agreements, and regulatory compliance.We aim to facilitate seamless transitions that align with your strategic goals.With our expertise, you can navigate the complexities of M&A with confidence.Secure growth and competitive advantage through successful M&A transactions.",
          image: "/card/merger.webp",
        },
        {
          id: "immigration-law",
          title: "Franchise License Service",
         description:
            "Franchising offers a pathway for business expansion and growth.We provide expert guidance in securing franchise licenses and drafting agreements.Our services ensure compliance with franchising laws and intellectual property protection.We assist both franchisors and franchisees in structuring fair and effective deals.Grow your brand and establish successful franchises with our legal expertise.Maximize opportunities with tailored franchise license services.",
          image: "/card/franchise.webp",
        },
        {
          id: "immigration-law",
          title: "NGO & INGO",
         description:
            "Starting and managing an NGO/INGO requires sound legal support.We assist with registration, tax exemptions, and regulatory compliance.Our team ensures governance structures align with legal and ethical standards.We help organizations secure necessary approvals and licenses efficiently.From funding agreements to operational policies, we provide end-to-end assistance.Empower your nonprofit to achieve its mission with our legal guidance.",
          image: "/card/ngo-ingo.webp",
        },
        {
          id: "immigration-law",
          title: "Due Diligence",
         description:
            "Due diligence is essential for informed decision-making in investments and partnerships.Our services involve assessing legal, financial, and operational risks.We conduct comprehensive reviews of contracts, compliance, and company records.Our team ensures transparency and mitigates potential liabilities.We provide actionable insights to help you proceed with confidence.Trust us to safeguard your interests through meticulous due diligence.",
          image: "/card/due-deligence.webp",
        },
        {
          id: "immigration-law",
          title: "Energy & Infrastructure Law",
         description:
            "Energy and infrastructure projects involve unique legal challenges.We provide guidance on project financing, regulatory compliance, and risk management.Our team specializes in drafting agreements and resolving disputes in this sector.From renewable energy to large-scale infrastructure, we ensure legal alignment.We help clients achieve sustainable and profitable outcomes in complex projects.Leverage our expertise to navigate the dynamic energy and infrastructure landscape.",
          image: "/card/energy.webp",
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
    name: "Jack Dempsey",
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