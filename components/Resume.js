import NextLink from "next/link";

const Experience = ({
  companyName,
  companyWebsite,
  jobDescription,
  jobTitle,
  startDate,
  endDate,
  technologies,
}) => {
  return (
    <div className="flex space-x-4">
      <div className="w-1/2">
        <a href={companyWebsite} target="_blank">
          <h3 className="text-xl sm:text-2xl font-semibold hover:underline underline-offset-4 mb-2">
            {companyName}
          </h3>
        </a>
        <p className="text-sm">{jobDescription}</p>
      </div>
      <div className="w-1/2">
        <div className="text-xs m-2">
          {jobTitle}
          <span className="font-light">
            {" "}
            • {startDate} - {endDate}
          </span>
        </div>
        <div className="flex flex-wrap space-x-1 sm:space-x-2">
          {technologies.map((technology) => (
            <div className="text-xs sm:text-sm font-medium border rounded-xl px-2 sm:px-3 py-1.5 mt-2">
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default function Resume() {
  return (
    <div className="space-y-12">
      <Experience
        companyName="Parctice"
        companyWebsite="https://practice.do"
        jobDescription="Worked on foundational Saas features: dashboard, multi-seat,
          onboarding flows, in-app chat, email notifications, payment packages
          etc."
        jobTitle="Full Stack Engineer"
        startDate="Nov 2021"
        endDate="Present"
        technologies={["React", "Next.js", "TypeScript"]}
      />
      <Experience
        companyName="Hubs"
        companyWebsite="https://hubs.com"
        jobDescription="Worked on solving the problem of shipping delays in a manifacturing marketplace. On time shipping ratio rose from 87% to 92%."
        jobTitle="Full Stack Engineer"
        startDate="Sep 2020"
        endDate="Mar 2021"
        technologies={["TypeScript", "Angular", "PostgreSQL"]}
      />
      <Experience
        companyName="Ownest"
        companyWebsite="https://ownest.io"
        jobDescription="Worked on scaling a decentralized NFT application. We were able to go from a few transactions/sec to thousands of transactions/sec."
        jobTitle="Software Engineer Intern"
        startDate="Apr 2019"
        endDate="Sep 2019"
        technologies={["Go", "Cosmos SDK", "Solidity"]}
      />
      <Experience
        companyName="BlockTech"
        companyWebsite="https://block-tech.io"
        jobDescription="Worked on automating the movement of Ether between different wallets. The algorithm predicts prices and moves funds accordingly."
        jobTitle="Software Engineer Intern"
        startDate="Jun 2018"
        endDate="Sep 2018"
        technologies={["Python", "Web3.py", "PostgreSQL"]}
      />
      <Experience
        companyName="Atos"
        companyWebsite="https://atos.net"
        jobDescription="Worked on building a UX focused application for a client in the health sector."
        jobTitle="Software Engineer Intern"
        startDate="Jun 2017"
        endDate="Sep 2017"
        technologies={["JavaScript", "HTML", "CSS"]}
      />
    </div>
  );
}
