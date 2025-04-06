import { Container } from "../Container";
import { InfiniteSlider } from "../InfiniteSlider";
import Instagram from "@/assets/brands/instagram.svg";
import ApplePay from "@/assets/brands/apple-pay.svg";
import Arxiv from "@/assets/brands/arxiv.svg";
import Hubspot from "@/assets/brands/hubspot.svg";
import Shopify from "@/assets/brands/shopify.svg";
import Stripe from "@/assets/brands/stripe.svg";

const brands = [
  {
    img: Instagram,
    alt: "Instagram_logo",
  },
  {
    img: ApplePay,
    alt: "ApplePay-logo",
  },
  {
    img: Arxiv,
    alt: "Arxiv-logo",
  },
  {
    img: Hubspot,
    alt: "Hubspot-logo",
  },
  {
    img: Shopify,
    alt: "Shopify-logo",
  },
  {
    img: Stripe,
    alt: "Stripe-logo",
  },
];

export function Brands() {
  return (
    <Container className="relative py-24 flex flex-col  items-center  overflow-hidden">
      <div className="relative flex flex-col justify-center items-center gap-8">
        <p className="px-3 py-1 rounded-full font-archivo font-xs bg-accent font-medium tracking-wider">
          Interested
        </p>
        <h1 className="text-5xl font-semibold">Trusted by 300+ Companies</h1>
        <div className="relative z-10">
          <div className="absolute z-50 h-full w-full bg-gradient-to-r from-background via-transparent to-background" />
          <InfiniteSlider gap={48} reverse>
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand.img}
                alt={brand.alt}
                className="h-[120px] w-auto filter invert-0 dark:invert"
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
      <div className="opacity-25 absolute  z-50 h-96 w-[80%] translate-y-3/6 rounded-full blur-3xl  bg-gradient-to-r from-5% to-95% -transparent via-cyan-600 to-transparent" />
      <div className="absolute z-[999] h-[2px] w-[80%] bottom-0  rounded-full  bg-gradient-to-r from-transparent via-blue-600 to-transparent " />
    </Container>
  );
}
