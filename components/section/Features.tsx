import { Container } from "../Container";

export function Features() {
  return (
    <Container className="relative py-24 flex flex-col  items-center  overflow-hidden">
     <div className="z-50 flex flex-col justify-center items-center gap-5">
       <p className="px-3 py-1 rounded-full font-archivo font-xs bg-accent font-medium tracking-wider">
         Features
       </p>
       <h1 className="text-5xl  font-semibold">All you need to do Business</h1>
       <p className="max-w-xl text-center">
         Track campaign performance, and analyze key metrics and make data driven
         decisions - all in one dashboard.
       </p>
       <div className="flex flex-col items-center justify-center gap-5">
         <div className="flex w-[90%] flex-row gap-5 justify-center items-center">
           <div className="w-2/5 h-full bg-gray-200 dark:bg-black px-8 py-10 rounded-lg flex flex-col gap-8 border-2">
             {/* Card Inside */}
             <div className="flex flex-col p-5 justify-between bg-background rounded-xl gap-8 border-2">
               <div className="flex justify-between items-center w-full">
                 <p className="text-2xl font-semibold">Delivered</p>
                 <svg
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <circle cx="12" cy="12" r="1" />
                   <circle cx="19" cy="12" r="1" />
                   <circle cx="5" cy="12" r="1" />
                 </svg>
               </div>
               <p className="text-4xl">$12,199</p>
               <p className="text-lg flex flex-row gap-3">
                 Last week
                 <span className="flex gap-3 text-green-500">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     
                   >
                     <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                     <polyline points="16 7 22 7 22 13" />
                   </svg>
                   0.08%
                 </span>
               </p>
             </div>
 
             <div className="flex flex-col justify-center items-center gap-3">
               <p className="text-xl font-semibold">Track Performance at a Glance</p>
               <p className="text-center">
                 Monitor key metrics in real time and make data driven decisions
                 with ease.
               </p>
             </div>
           </div>
           <div className="w-3/5 h-full bg-gray-200 dark:bg-black px-8 pt-10 border-2 rounded-xl flex flex-col items-center justify-center gap-4">
             <p className="text-2xl font-semibold">Real-Time Analytics</p>
               <p className="text-center text-lg">
                 Gain instant insights to your customers' behavior and campaign
                 performance.enabling you to optimize strategies on the go
               </p>
             <img src="https://placehold.co/500x250" alt="Image" className="rounded-lg border-2 border-b-0 rounded-b-none "/>
           </div>
         </div>
         {/* 2nd Row */}
         <div className="flex w-[90%] flex-row gap-5 justify-center items-center">
           <div className="w-3/5 h-full bg-gray-200 dark:bg-black px-8 pt-10 border-2 rounded-xl flex flex-col items-center justify-center gap-4">
             <p className="text-2xl font-semibold">Data Insights for Smarter Decisions</p>
               <p className="text-center text-lg">
                 Leverage in-depth analytics to uncover trends, optimize performance, and drive better business outcomes with confidence.
               </p>
             <img src="https://placehold.co/500x250" alt="Image" className="rounded-lg border-2 border-b-0 rounded-b-none "/>
           </div>
           <div className="w-2/5 h-full bg-gray-200 dark:bg-black px-8 py-10 rounded-lg flex flex-col gap-8 border-2">
             {/* Card Inside */}
             <div className="flex flex-col p-5 justify-between bg-background rounded-xl gap-8 border-2">
               <div className="flex justify-between items-center w-full">
                 <p className="text-2xl font-semibold">Delivered</p>
                 <svg
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <circle cx="12" cy="12" r="1" />
                   <circle cx="19" cy="12" r="1" />
                   <circle cx="5" cy="12" r="1" />
                 </svg>
               </div>
               <p className="text-4xl">$12,199</p>
               <p className="text-lg flex flex-row gap-3">
                 Last week
                 <span className="flex gap-3 text-green-500">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     
                   >
                     <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                     <polyline points="16 7 22 7 22 13" />
                   </svg>
                   0.08%
                 </span>
               </p>
             </div>
 
             <div className="flex flex-col justify-center items-center gap-3">
               <p className="text-xl font-semibold">Campaign Performance in One View</p>
               <p className="text-center">
                 Track ket metrics and trends in real time from a single dashboard.
               </p>
             </div>
           </div> 
         </div>
       </div>
     </div>
     <div className="opacity-25 absolute  z-10 h-96 w-[80%] bottom-0 translate-y-1/2 rounded-full blur-3xl  bg-gradient-to-r from-5% to-95% -transparent via-cyan-600 to-transparent" />
     <div className="absolute z-10 h-[2px] w-[80%] bottom-0  rounded-full  bg-gradient-to-r from-transparent via-blue-600 to-transparent " />
    </Container>
  );
}
