import { Card } from "flowbite-react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
          About Us
        </h1>

        {/* Intro Section */}
        <Card>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            Welcome to <span className="font-bold">XYZ Law firm</span>, where
            integrity, professionalism, and personalized solutions define our
            approach to legal services. With years of experience, we provide
            expert legal counsel to individuals, families, and businesses.
          </p>
        </Card>

        {/* Mission Section */}
        <div className="mt-8">
          <Card>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to empower our clients with clear, actionable legal
              advice while safeguarding their rights and interests. We are
              dedicated to building lasting relationships based on trust,
              transparency, and results.
            </p>
          </Card>
        </div>

        {/* Services Section */}
        <div className="mt-8">
          <Card>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              What We Offer
            </h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Corporate Law: Business regulations, contracts, and disputes.</li>
              <li>Family Law: Divorce, child custody, and inheritance.</li>
              <li>Criminal Defense: Strategic and robust defense services.</li>
              <li>Property and Real Estate Law: Smooth transactions and dispute resolutions.</li>
              <li>Employment Law: Workplace-related legal advocacy.</li>
            </ul>
          </Card>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-8">
          <Card>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Expertise You Can Trust: Knowledgeable and experienced attorneys.</li>
              <li>Client-Centered Approach: Services tailored to your needs.</li>
              <li>Transparent Communication: Clear and accessible legal processes.</li>
              <li>Proven Results: Dedicated to delivering favorable outcomes.</li>
            </ul>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="mt-8">
          <Card>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Whether you&apos;re facing a legal challenge or planning ahead,
              <span className="font-bold">XYZ Law firm</span> is here to
              help. Reach out to us today for a consultation and take the first
              step toward resolving your legal matters.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
