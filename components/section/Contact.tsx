import { Container } from "../Container";
import { Button } from "../Button";

const ContactData = [
  {
    icon: <HeadPhone className="size-10 stroke-white " />,
    title: "Customer Support",
    description:
      "Automate and enhance your marketing campaigns with AI-powered tools for maximum efficiency and ROI.",
    button: (
      <Button className="w-fit rounded-full bg-gradient-to-tr from-cyan-500 to-cyan-200 py-6">
        Support Center
      </Button>
    ),
  },
  {
    icon: <HeadPhone className="size-10 stroke-white" />,
    title: "Customer Support",
    description:
      "Automate and enhance your marketing campaigns with AI-powered tools for maximum efficiency and ROI.",
    button: (
      <Button className="w-fit rounded-full bg-gradient-to-tr from-cyan-500 to-cyan-200 py-6">
        Chat Sales
      </Button>
    ),
  },
];

export function ContactUs() {
  return (
    <Container className="relative py-24 flex flex-col  items-center  overflow-hidden">
      <div className="relative flex flex-col justify-center items-center gap-8">
        <p className="px-3 py-1 rounded-full font-archivo font-xs bg-accent tracking-wider">
          Contact Us
        </p>
        <h1 className="text-5xl font-semibold">Hello, How can we help You?</h1>
        <p className="max-w-xl text-center">
          Find answers to your common questions about our digital marketing
          platform.
        </p>
        <div className="z-20 flex gap-8 px-20">
          {ContactData.map((data) => (
            <div className="flex flex-col gap-5 bg-accent/50 p-10 rounded-xl shadow-2xl border-2">
              <div className="bg-accent p-3 rounded-full border w-fit">
                {data.icon}
              </div>
              <h1 className="text-4xl font-archivo font-semibold">{data.title}</h1>
              <p className="text-lg">{data.description}</p>
              {data.button}
            </div>
          ))}
        </div>
      </div>
      
      <div className="opacity-25 absolute  z-50 h-96 w-[80%] bottom-0 translate-y-4/6 rounded-full blur-3xl  bg-gradient-to-r from-5% to-95% -transparent via-cyan-600 to-transparent" />
      <div className="absolute z-[999] h-[2px] w-[80%] bottom-0  rounded-full  bg-gradient-to-r from-transparent via-blue-600 to-transparent " />
    </Container>
  );
}

function HeadPhone(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-6.16C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03" />
    </svg>
  );
}
