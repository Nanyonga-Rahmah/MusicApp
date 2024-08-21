"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { TableDemo } from "./SongsTable";
import { DownloadIcon } from "lucide-react";
const releases=[
    {
        image:"/Ruth.jpg",
        title:"Mixed Signals",
        artist:"Ruth B",
        duration:"2:30"
    },
    {
        image:"/Ruth.jpg",
        title:"Dandelions",
        artist:"Ruth B",
        duration:"2:30"
    },
    {
        image:"/Ruth.jpg",
        title:"Mixed Signals",
        artist:"Ruth B",
        duration:"2:30"
    },
    {
        image:"/Ruth.jpg",
        title:"Dandelions ",
        artist:"Ruth B",
        duration:"2:30"
    },
]
const played=[
    {
        image:"/Ruth.jpg",
        title:"Mixed Signals",
        artist:"Ruth B",
        duration:"2:30"
    },
    {
        image:"/Ruth.jpg",
        title:"Dandelions",
        artist:"Ruth B",
        duration:"2:30"
    },
    {
        image:"/Ruth.jpg",
        title:"Mixed Signals",
        artist:"Ruth B",
        duration:"2:30"
    },
    {
        image:"/Ruth.jpg",
        title:"Dandelions ",
        artist:"Ruth B",
        duration:"2:30"
    },
    {
        image:"/Ruth.jpg",
        title:"Mixed Signals",
        artist:"Ruth B",
        duration:"2:30"
    },
    {
        image:"/Ruth.jpg",
        title:"Dandelions ",
        artist:"Ruth B",
        duration:"2:30"
    },
]

function Home() {
  return (
    <div className='  h-screen md:grid grid-cols-5 md:p-4 bg-black  '>
     <div className="col-span-3 p-5  ">
        <div className="grid grid-rows-2 md:flex flex-row bg-conic-gradient from-blue-500 via-blue-200 to-blue-500 rounded-xl text-white">
            <div className="order-last md:order-first md:px-20 pt-4 flex flex-col justify-center items-center md:items-start  ">
                <Button variant="outline" className="bg-blue-400 border">NEW ALBUM</Button>
                <h3 className="mt-5 mb-2 font-bold text-sm uppercase">God Never Fails</h3>
                <p className="text-sm px-4 md:px-0">Experience a vibrant journey of emotions with this captivating music album.Each Track unfolds a unique story</p>
                <div className="flex justify-between my-2 text-sm text-right">
                    <span >23 Songs</span>
                    <span>56 Minutes 23 Seconds</span>
                </div>
            </div>
            <div className=" bg-cover  bg-center w-full bg-no-repeat  bg-hero-background  "></div>
        </div>

        <div className=" mt-5">
            <div className="flex justify-between mb-2 mr-2">
                <span className="text-white font-bold text-xl">New Releases</span>
                <span className="text-blue-700"><Link href='/'>See All</Link></span>
            </div>
            <div className="grid gap-5 items-center justify-center md:flex ">
                {releases.map((release,index)=>(
                    <div key={index} className="w-[200px] h-[220px] bg-gray-900 rounded-lg text-white overflow-hidden mr-2">
                        <div className="object-cover overflow-clip h-[130px] mb-2"><Image src={release.image} width={200} height={200} alt='artist'/></div>
                        <div className=" text-sm px-3">{release.title}</div>
                        <div  className="flex justify-between mt-4 text-sm  px-3 ">
                            <span>{release.artist}</span>
                            <span>{release.duration}</span>
                        </div>
                     
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-3">
            <h3 className="text-white font-bold text-xl my-4">Popular Songs</h3>
        <div className="px-10 ">
        <TableDemo/>
        </div>
        </div>
     </div>
     <div className="flex flex-col col-span-2 justify-center px-10 text-white">
     <h3 className="text-white font-bold mt-4">Most Played</h3>
        <div className="w-full my-5">
         
            {played.map((release,index)=>(
                    <div key={index} className="w-full bg-gray-900 rounded-full text-white overflow-hidden mb-2 p-2 flex justify-between">
                        <div className="flex gap-3">
                        <div className="object-contain "><Image src={release.image} width={40} height={0} alt='artist' className="rounded-full"/></div>
                        <div>
                        <div className=" text-sm">{release.title}</div>
                        <span className="text-xs">{release.artist}</span>
                        </div>
                       
                        </div>
                        <div className="mt-3 mr-3"><DownloadIcon/></div>
                        
                       
                     
                    </div>
                ))}
        </div>
        <div>
            <h3 className="font-bold my-4">Trending Album</h3>
            <div className="rounded-lg p-5 border border-gray-500">
                <div className="bg-hero-pattern w-full h-[200px] bg-cover rounded-2xl bg-no-repeat mb-2 ">
                   
                </div>
                <div>
                   <div className="flex justify-between">
                    <span>Mixed Signals</span>
                    <span>9 songs</span>
                   </div>
                   <span>Ruth B</span>
                </div>
            </div>
        </div>
     
     </div>
   
    </div>
  );
}

export default Home;
