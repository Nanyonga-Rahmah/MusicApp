'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import SideNav from "@/components/SideNav";
import SideNavButton from "@/components/SideNavButton";
import { SideBarItems } from "@/lib/types";
import {
  Search,
  Home as HomeIcon,
  SearchIcon,
  TrendingUp,
  AlbumIcon,
  PlaySquareIcon,
  Heart,
  PlusCircle,
} from "lucide-react";
const NavItems: SideBarItems = {
  links: [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Discover", href: "/discover", icon: SearchIcon },
    { label: "Trending", href: "/trending", icon: TrendingUp },
    { label: "Albums", href: "/albums", icon: AlbumIcon },
  ],
  extras: (
    <div className="flex flex-col">
      <h3 className="mt-5 mb-2 mx-3 font-bold">LIBRARY</h3>
      <SideNavButton icon={PlaySquareIcon}>Recently Played</SideNavButton>
      <SideNavButton icon={Heart}>Favorites</SideNavButton>
      <SideNavButton icon={PlusCircle}>Play List </SideNavButton>
    </div>
  ),
};

export default function LandingPage() {
  return (
    <>
  
      <SideNav SideNavItems={NavItems} />
     <div className="w-full col-span-5 ">
     <Header />
     <Home/>
     </div>
     
    <Footer />
   
    </>
  );
}
