import React from "react";
import SideNavButton from "./SideNavButton";

import { SideBarItems } from "@/lib/types";
import Link from "next/link";

interface SideBarDesktopProps {
  SideNavItems: SideBarItems;
}

function SideNav(props: SideBarDesktopProps) {
  return (
    <>
    <aside className="col-span-1 min-h-screen bg-gray-700 max-w-xs  border-r ">
      <div className="h-full p-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground">MuzikApp</h3>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {props.SideNavItems.links.map((link, index) => (
                <Link key={index} href={link.href}>
                  <SideNavButton 
              icon={link.icon} className="w-full">{link.label}</SideNavButton>
                </Link>
            
            ))}
            {props.SideNavItems.extras}
          </div>
        </div>
      </div>
    </aside>
   
     </>
  );
}

export default SideNav;
