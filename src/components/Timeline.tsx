"use client";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  company?: string;
  role?: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "Deep/Dark web integration",
    description:
      "Developing alerting services for customers on Deep/Dark web data breaches and exposed Personally Identifiable Information",
    company: "Zoho",
    role: "Software Engineer",
  },
  {
    year: "2022",
    title: "Auto Logsource configuration",
    description:
      "Designed & Implemented common Auto Log-source syncing framework service for syncing devices from Active Directory to Zoho's products",
  },
  {
    year: "2021",
    title: "Remote Agent delivery optimisation",
    description:
      "Designed local updates sharing architecture for native windows agents for downloading threat data",
  },
];

export default function Timeline() {
  return (
    <section className="py-12">
      <div className="relative mx-auto w-4/5 border-l border-gray-300">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative mb-10 flex items-start">
            {/* Year on left */}
            <div className="w-20 pr-4 text-right text-sm font-semibold text-gray-600">
              {item.year}
            </div>

            {/* Dot + Content */}
            <div className="relative flex-1 pl-6">
              {/* Dot */}
              <span className="absolute -left-[13px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 ring-4 ring-white"></span>

              {/* Logo + Role */}
              <div className="flex items-center justify-between">
                {item.company && (
                  <img
                    src="/images/logo.png"
                    alt={item.company}
                    className="h-4"
                  />
                )}
                {item.role && (
                  <span className="text-sm text-gray-500">{item.role}</span>
                )}
              </div>

              {/* Title */}
              <h4 className="mt-2 text-base font-bold">{item.title}</h4>
              <p className="mt-1 text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
