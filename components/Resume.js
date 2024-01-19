export const Technologies = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-x-1 sm:gap-x-2 gap-y-2">
      {technologies.map((technology) => (
        <div className="text-xs font-medium border rounded-xl px-2 py-1.5">
          {technology}
        </div>
      ))}
    </div>
  );
};

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
    <div>
      <div className="flex items-center gap-x-4 sm:gap-x-5 mb-2">
        <div className="w-1/2">
          <a href={companyWebsite} target="_blank">
            <h3 className="text-xl sm:text-2xl font-semibold hover:underline underline-offset-4">
              {companyName}
            </h3>
          </a>
        </div>
        <div className="w-1/2">
          <div className="text-xs">
            {jobTitle}
            <span className="font-light">
              {" "}
              • {startDate} - {endDate}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 sm:gap-x-5">
        <div className="w-1/2">
          <p className="text-sm">{jobDescription}</p>
        </div>
        <div className="w-1/2">
          <Technologies technologies={technologies} />
        </div>
      </div>
    </div>
  );
};

export default function Resume() {
  return (
    <>
      <div className="space-y-12">
        <Experience
          companyName="Practice"
          companyWebsite="https://practice.do"
          jobDescription="Worked on foundational SaaS features: dashboard, multi-seat,
          onboarding flows, in-app chat, email notifications, payment packages
          etc."
          jobTitle="Front-End Engineer"
          startDate="2021"
          endDate="Present"
          technologies={["React", "Next.js", "TypeScript"]}
        />
        <Experience
          companyName="Hubs"
          companyWebsite="https://hubs.com"
          jobDescription="Worked on solving the problem of shipping delays in a manifacturing marketplace. On time shipping ratio rose from 87% to 92%."
          jobTitle="Front-End Engineer"
          startDate="2020"
          endDate="2021"
          technologies={["Angular", "TypeScript", "PostgreSQL"]}
        />
        <Experience
          companyName="Ownest"
          companyWebsite="https://ownest.io"
          jobDescription="Worked on scaling a decentralized NFT application. We were able to go from a few transactions/sec to thousands of TPS."
          jobTitle="Software Engineer"
          startDate="2019"
          endDate="2019"
          technologies={["Go", "Cosmos SDK", "Solidity"]}
        />
        <Experience
          companyName="BlockTech"
          companyWebsite="https://block-tech.io"
          jobDescription="Worked on automating the movement of Ether between different wallets. The algorithm predicts prices and moves funds accordingly."
          jobTitle="Software Engineer"
          startDate="2018"
          endDate="2018"
          technologies={["Python", "Web3.py", "PostgreSQL"]}
        />
        <Experience
          companyName="Atos"
          companyWebsite="https://atos.net"
          jobDescription="Worked on building a UX focused application for a client in the health sector."
          jobTitle="Software Engineering Intern"
          startDate="2017"
          endDate="2017"
          technologies={["JavaScript", "HTML", "CSS"]}
        />
      </div>
      <p className="mt-32 mb-8">
        I studied Computer Science in Paris and did an exchange semester in
        Japan.
      </p>
      <div className="flex space-x-4 sm:space-x-5">
        <div className="w-1/2">
          <div className="text-xl sm:text-2xl font-semibold mb-1">
            University of Paris
          </div>
          <p>MSc + BSc • Computer Science</p>
        </div>
        <div className="w-1/2">
          <div className="text-xl sm:text-2xl font-semibold mb-1">
            Tohoku University
          </div>
          <p>Exchange program</p>
        </div>
      </div>
    </>
  );
}
