import { Container } from "../Container";

const cardDatas = [
  {
    title: "Smart Campaign Optimization",
    details:
      "Automate and enhance your marketing campaigns with AI-powered tools for maximum efficiency and ROI.",
    icon: <SmartCampaign className="stroke-white stroke-2 size-7" />,
  },
  {
    title: "Real-Time Data & Insights",
    details:
      "Gain instant access key marketing metrics, track engagement and make data-driven decisions effortlessly.",
    icon: <SmartCampaign className="stroke-white stroke-2 size-7" />,
  },
  {
    title: "Advanced Audience Targeting",
    details:
      "Deliver personalized messages to the right audience with precision segmentation and behavioral analytics.",
    icon: <SmartCampaign className="stroke-white stroke-2 size-7" />,
  },
];
export function Marketing() {
  return (
    <div className="relative">
      <div className=" opacity-30 absolute  z-10 size-[30rem] top-0 right-0 -translate-y-1/2 translate-x-1/3 rounded-full blur-3xl bg-radial to-transparent from-cyan-600" />
      <Container className="relative flex flex-col py-24 justify-center items-center gap-5 overflow-hidden">
        <p className="px-3 py-1 rounded-full font-archivo font-xs bg-accent font-medium tracking-wider">
          Welcome to One Marketing
        </p>
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-5xl  font-semibold">The Ultimate</h1>
          <h1 className="text-5xl  font-semibold">
            Digital Marketing Solution
          </h1>
        </div>
        <p className="max-w-xl text-center">
          Enhance your marketing strategy with automation, real-time insights
          and advanced targating - all in one seamless platform.
        </p>

        <div className="flex gap-4 mt-10">
          {cardDatas.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-5 justify-center items-center text-center bg-accent/50 p-10 rounded-lg shadow-xl hover:shadow-none border-2"
            >
              <div className="bg-accent/50 p-3 rounded-full border">
                {card.icon}
              </div>
              <p className="text-2xl font-medium font-archivo">{card.title}</p>
              <p className="">{card.details}</p>
            </div>
          ))}
        </div>
        <div className="opacity-25 absolute  -z-50 h-96 w-[80%] translate-y-7/8 rounded-full blur-3xl  bg-gradient-to-r from-5% to-95% -transparent via-cyan-600 to-transparent" />
        <div className="absolute z-20 h-[2px] w-[80%] bottom-0  rounded-full  bg-gradient-to-r from-transparent via-blue-600 to-transparent " />
      </Container>
    </div>
  );
}

function SmartCampaign(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 2v17c0 1.66 1.34 3 3 3h17" />
      <path d="m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7" />
    </svg>
  );
}
