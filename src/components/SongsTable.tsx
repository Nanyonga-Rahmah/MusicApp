import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { HeartIcon, MoreVertical } from "lucide-react"
import Image from "next/image"
  
  const songs = [
    {
     image:"/ruth B.jpg",
      duration: "3:10",
      title: "Superficial love",
      artist: "Ruth B",
    },
    {
        image:"/ruth B.jpg",
     duration: "3:20",
      title: "Lost Boy",
      artist: "Lauren Spenser",
    },
    {
        image:"/ruth B.jpg",
      duration: "3:10",
      title: "Just 28",
      artist: "Jesca Bio",
    },
    
   
  ]
  
  export function TableDemo() {
    return (
      <Table className="text-white">
      
       
        <TableBody>
          {songs.map((song,index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index+1}</TableCell>
              <TableCell className="font-medium">
                <div className="flex gap-2">
                    <div className="rounded-md overflow-hidden object-contain"><Image src={song.image} width={50} height={50} alt="artist"/></div>
                    <div className="flex flex-col">
                        <span>{song.title}</span>
                     <span>{song.artist}</span>
                    </div>
                </div>
              </TableCell>

              <TableCell>{song.duration}</TableCell>
              <TableCell><HeartIcon/></TableCell>
              <TableCell className="text-right"><MoreVertical/></TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  