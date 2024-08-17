// import React from "react";
// import SideNavButton from "./SideNavButton";

// import { SideBarItems } from "@/lib/types";
// import Link from "next/link";

// interface SideBarDesktopProps {
//   SideNavItems: SideBarItems;
// }

// function SideNav(props: SideBarDesktopProps) {
//   return (
//     <>
//       <aside className="col-span-1 min-h-screen bg-gray-700 max-w-xs  border-r ">
//         <div className="h-full p-4">
//           <h3 className="mx-3 text-lg font-semibold text-foreground">
//             MuzikApp
//           </h3>
//           <div className="mt-5">
//             <div className="flex flex-col gap-1 w-full">
//               {props.SideNavItems.links.map((link, index) => (
//                 <Link key={index} href={link.href}>
//                   <SideNavButton icon={link.icon} className="w-full">
//                     {link.label}
//                   </SideNavButton>
//                 </Link>
//               ))}
//               {props.SideNavItems.extras}
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }

// export default SideNav;
import React, { useState } from "react";
import SideNavButton from "./SideNavButton";
import { SideBarItems } from "@/lib/types";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

interface SideBarDesktopProps {
  SideNavItems: SideBarItems;
}

function SideNav(props: SideBarDesktopProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
   
      <div className="sm:hidden p-4 bg-gray-700 min-h-screen">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

  
      <aside
        className={`fixed inset-y-0 left-0  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:relative sm:flex sm:flex-col transition-transform duration-300 ease-in-out col-span-1 min-h-screen bg-gray-700 max-w-xs border-r`}
      >
        <div className="h-full p-4">
          <h3 className="mx-3 text-lg font-semibold text-foreground">MuzikApp</h3>
          <div className="mt-5">
            <div className="flex flex-col gap-1 w-full">
              {props.SideNavItems.links.map((link, index) => (
                <Link key={index} href={link.href}>
                  <SideNavButton icon={link.icon} className="w-full">
                    {link.label}
                  </SideNavButton>
                </Link>
              ))}
              {props.SideNavItems.extras}
            </div>
          </div>
        </div>
      </aside>

    
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

export default SideNav;
