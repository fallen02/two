import { Button } from "../Button";
import { Container } from "../Container";

export function HeroSection() {
  return (
    <Container className="flex flex-col gap-8 justify-center items-center p-25">
      <p className="text-xs font-archivo font-medium tracking-wider  bg-primary/20 px-2 py-1.5 rounded-full  border-2">
        Welcome to ONE Marketing
      </p>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-6xl font-semibold">Optimize Your</p>
        <p className="text-6xl font-semibold">Digital Marketing Strategy</p>
      </div>
      <p className="w-4xl text-xl text-center">
        Track campaign performance and optimize your marketing strategy. Our
        powerful analytics platform provides real-time insights into your
        marketing efforts.
      </p>
      <div className="flex gap-5">
        <Button variant={"secondary"}>Explore Features</Button>
        <Button>Try Now</Button>
      </div>
      <div className="relative">
          <div className="absolute z-50 h-full w-full   bg-gradient-to-b from-transparent to-background"/>
        <div className="mt-10 p-2 bg-accent rounded-2xl rounded-b-none">
          <img src="https://placehold.co/1100x600" alt="Hero Image" className="rounded-[8px]"/>
        </div>
      </div>
    </Container>
  );
}
