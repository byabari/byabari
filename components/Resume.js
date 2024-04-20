import Card from "@/components/Card";

const Experience = ({
  companyName,
  companyWebsite,
  jobDescription,
  jobTitle,
  startDate,
  endDate,
}) => {
  return (
    <Card title={companyName} href={companyWebsite}>
      {/* <div className="text-gray-800 text-xs">
        {jobTitle}
        <span className="font-light">
          {" "}
          • {startDate} - {endDate}
        </span>
      </div>
      <p className="text-gray-800 text-sm">{jobDescription}</p> */}
    </Card>
  );
};

export default function Resume() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Experience
          companyName="Practice"
          companyWebsite="https://practice.do"
          jobDescription="Worked on foundational Saas features: dashboard, multi-seat,
          onboarding flows, in-app chat, email notifications, payment packages
          etc."
          jobTitle="Frontend Engineer"
          startDate="2021"
          endDate="2023"
        />
        <Experience
          companyName="Hubs"
          companyWebsite="https://hubs.com"
          jobDescription="Worked on solving the problem of shipping delays in a manifacturing marketplace. On time shipping ratio rose from 87% to 92%."
          jobTitle="Frontend Engineer"
          startDate="2020"
          endDate="2021"
        />
        <Experience
          companyName="Ownest"
          companyWebsite="https://ownest.io"
          jobDescription="Worked on scaling a decentralized NFT application. We were able to go from a few transactions/sec to thousands of TPS."
          jobTitle="Software Engineer"
          startDate="2019"
          endDate="2019"
        />
        <Experience
          companyName="BlockTech"
          companyWebsite="https://block-tech.io"
          jobDescription="Worked on automating the movement of Ether between different wallets. The algorithm predicts prices and moves funds accordingly."
          jobTitle="Software Engineer"
          startDate="2018"
          endDate="2018"
        />
        <Experience
          companyName="Atos"
          companyWebsite="https://atos.net"
          jobDescription="Worked on building a UX focused application for a client in the health sector."
          jobTitle="Software Engineering Intern"
          startDate="2017"
          endDate="2017"
        />
      </div>
    </>
  );
}
