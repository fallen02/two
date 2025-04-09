import { Link } from "react-router";
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/Button";

import { Container } from "../Container";
import { LOGONEW } from "../Logo";
import { NavLinks } from "../Navlinks";

function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 7H21" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.49023 12H21.0002" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12H5.99" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 17H21" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true" 
      {...props}
    >
      <path d="M13.9902 10.0099L14.8302 9.16992" />
      <path d="M9.16992 14.8301L11.9199 12.0801" />
      <path d="M14.8299 14.8299L9.16992 9.16992" />
      <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" />
    </svg>
  );
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    "as" | "className"
  >
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base/7 tracking-tight text-foreground font-opensans font-semibold"
      {...props}
    />
  );
}

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link to="/" aria-label="Home">
              <LOGONEW className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg bg-foreground stroke-gray-200 dark:stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 focus:not-data-focus:outline-hidden active:stroke-gray-900"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-background/30 backdrop-blur-3xl"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-transparent px-6 pt-32 pb-6 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink to="/#features">
                              Features
                            </MobileNavLink>
                            <MobileNavLink to="/#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink to="/#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink to="/#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button variant="outline">Log in</Button>
                            <Button>Download the app</Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="flex items-center gap-6 max-lg:hidden">
              <Button variant="outline">Log in</Button>
              <Button>Download</Button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
