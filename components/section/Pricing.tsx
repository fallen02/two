import { cn } from "@/lib/utils";
import { Button } from "../Button";
import { Container } from "../Container";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const pricingData = [
  {
    type: "Monthly",
    items: [
      {
        title: "Startup",
        price: 60,
        desc: "For small teams and startups looking to launch and grow efficiently.",
        includes: [
          "Essential campaign tracking",
          "Basic analytics",
          "Email support",
        ],
      },
      {
        title: "Scaleup",
        price: 100,
        desc: "For growing businesses that need advanced insights and automation.",
        includes: [
          "Advanced campaign analytics",
          "AI-powered analytics",
          "Priority support",
        ],
      },
      {
        title: "Enterprise",
        price: null,
        desc: "For enterprises that require tailored solutions and full scalability.",
        includes: [
          "Custom integration",
          "Dedicated account manager",
          "24/7 premium support",
        ],
      },
    ],
  },
  {
    type: "Yearly",
    items: [
      {
        title: "Startup",
        price: 600,
        desc: "For small teams and startups looking to launch and grow efficiently.",
        includes: [
          "Essential campaign tracking",
          "Basic analytics",
          "Email support",
        ],
      },
      {
        title: "Scaleup",
        price: 1000,
        desc: "For growing businesses that need advanced insights and automation.",
        includes: [
          "Advanced campaign analytics",
          "AI-powered analytics",
          "Priority support",
        ],
      },
      {
        title: "Enterprise",
        price: null,
        desc: "For enterprises that require tailored solutions and full scalability.",
        includes: [
          "Custom integration",
          "Dedicated account manager",
          "24/7 premium support",
        ],
      },
    ],
  },
];

export function Pricing() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Container className="z-10  py-24 flex flex-col justify-center items-center gap-8">
        <p className="px-3 py-1 rounded-full font-archivo font-xs bg-accent font-medium tracking-wider">
          Pricing
        </p>
        <h1 className="text-5xl  font-semibold">
          Plans for Every Business Needs
        </h1>
        <div>
          <TabGroup className={"flex flex-col justify-center items-center"}>
            <TabList className="flex gap-3  bg-accent p-[2px] rounded-full">
              {pricingData.map((price) => (
                <Tab
                  key={price.type}
                  className={
                    "rounded-full py-1 px-3 text-sm/6 font-semibold text-foreground focus:outline-none data-[selected]:bg-primary/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                  }
                >
                  {price.type}
                </Tab>
              ))}
            </TabList>
            <TabPanels className={"mt-10"}>
              {pricingData.map(({ type, items }) => (
                <TabPanel key={type}>
                  <div className="flex gap-5 flex-col md:flex-row">
                    {items.map((item, idx) => (
                      <div
                        className="bg-accent/15 p-8 rounded-2xl border flex flex-col gap-8"
                        key={idx}
                      >
                        <div className="flex  items-center gap-5">
                          <div className="p-2 bg-accent  rounded-full">
                            <div className="size-5 bg-gradient-to-r from-background via-cyan-500 to-background blur-xs rounded-full"></div>
                          </div>
                          <h1 className="text-2xl font-semibold">
                            {item.title}
                          </h1>
                        </div>
                        {item.price ? (
                          <p>
                            <span className="text-4xl">{`$${item.price}`}</span>
                            {`/${type}`}
                          </p>
                        ) : (
                          <p className="text-4xl">Custom</p>
                        )}
                        <p className="text-lg"> {item.desc} </p>
                        <div className="flex flex-col gap-3">
                          {item.includes.map((feature, index) => (
                            <div
                              className="flex flex-row gap-2  items-center"
                              key={index}
                            >
                              <CheckLogo />
                              <p>{feature}</p>
                            </div>
                          ))}
                        </div>
                        {item.price ? (
                          <Button
                            className={cn(
                              "rounded-full",
                              idx === 1 &&
                                "bg-gradient-to-l from-blue-600 to-cyan-500",
                            )}
                          >
                            Choose This Plan
                          </Button>
                        ) : (
                          <Button className="rounded-full">Contact Us</Button>
                        )}
                      </div>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </Container>
      
      <div className="opacity-25 absolute -z-10 h-96 w-[80%] right-0 -translate-y-3/6 translate-x-1/2 rounded-full blur-3xl  bg-gradient-to-r from-5% to-95% -transparent via-cyan-600 to-transparent" />
      <div className="opacity-25 absolute -z-10 h-96 w-[80%] left-0 translate-y-5/6 -translate-x-1/2 rounded-full blur-3xl  bg-gradient-to-r from-5% to-95% -transparent via-cyan-600 to-transparent" />
    </div>
  );
}

function CheckLogo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
