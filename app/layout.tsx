import { Outlet } from "react-router";
import { Footer } from "@/components/section/Footer";
import { Header } from "@/components/section/Header";

export default function RootLayout() {
    return(
        <div className="relative">
          <div className="absolute  z-50 h-96 w-full -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-600 to-transparent opacity-30 dark:opacity-70  blur-3xl"/>
            <Header />
            <main className="font-opensans">
              
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}