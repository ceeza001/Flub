import { Outlet } from "react-router-dom";

import { Topbar } from "@/components/";

const RootLayout = () => {
  
  return (
    <>
      <div className="w-full">
        <div className="z-[-1] fixed top-0 left-0 w-screen h-screen">
          <img 
            src="/assets/images/bg.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        {/*
          <div className="fixed top-0 left-0 black-glassmorphism z-[-1] w-full h-screen"></div>
        */}
        <Topbar />
        <Outlet />
        
        <footer className="mt-[4rem] p-[1rem] md:p-[4rem]">
          
        </footer>
      </div>
    </>
  );
};

export default RootLayout;