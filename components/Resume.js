import Card from "@/components/Card";

const Experience = ({
  logoImageSrc,
  companyName,
  companyWebsite,
  jobDescription,
  jobTitle,
  startDate,
  endDate,
  imageSrc,
}) => {
  return (
    <Card
      logoImageSrc={logoImageSrc}
      title={companyName}
      href={companyWebsite}
      imageSrc={imageSrc}
      description={jobDescription}
    />
  );
};

export default function Resume() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-3 gap-y-16">
      <Experience
        logoImageSrc="/practice-logo.jpg"
        companyName="Practice"
        companyWebsite="https://practice.do"
        jobDescription="Practice is a CRM-like product for coaches and consultants. I joined Practice right after their seed round, led by a16z, and helped build some of the core parts of the product."
        jobTitle="Frontend Engineer"
        startDate="2021"
        endDate="2023"
        imageSrc="/practice.jpg"
      />
      <Experience
        logoImageSrc="/hubs-logo.jpg"
        companyName="Hubs"
        companyWebsite="https://hubs.com"
        jobDescription="Hubs is an on-demand manufacturing marketplace. I joined Hubs at the
          peak of their rapid growth stage. During my time there, the company
          was acquired for $300 million by Protolabs."
        jobTitle="Frontend Engineer"
        startDate="2020"
        endDate="2021"
        imageSrc="/hubs.webp"
      />
      {/* <Experience
          companyName="Ownest"
          companyWebsite="https://ownest.io"
          jobDescription="Worked on scaling a decentralized NFT application. We were able to go from a few transactions/sec to thousands of TPS."
          jobTitle="Software Engineer"
          startDate="2019"
          endDate="2019"
          imageSrc="/ownest.jpg"
        /> */}
      {/* <Experience
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
        /> */}
    </div>
  );
}
