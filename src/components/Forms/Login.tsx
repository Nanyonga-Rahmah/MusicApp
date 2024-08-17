"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EyeIcon, LockIcon, MailIcon, Music4Icon } from "lucide-react"
import Link from "next/link"

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, { message: "Password must be at least 2 characters",}),
})

export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
   
  }

  return (
    <div className="text-white bg-black  md:w-[400px] w-[90%] ">
      <div className="label mt-2 mb-4 text-2xl flex ">
        <div className="brand border-4 rounded-full p-2"><Music4Icon/></div>
        <span className="mt-2 mx-2">GdMuzik</span></div>
      <div className="mb-4">
        <h3 className="mt-2 text-2xl font-bold">Welcome Back </h3>
        <span className="text-[18px] my-2">Don&apos;t have an Account? <Link href='/register' className="text-blue-600">Create one here</Link></span>
      </div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
        <FormField
          control={form.control}
          name="email"
         
          render={({ field }) => (
            <FormItem>
              
              <div className="flex border px-2 rounded-md my-6">
                <FormLabel className="mt-2"><MailIcon/></FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} className="border-none outline-none bg-black" />
              </FormControl>
               
              </div>
            
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
           
           <div className="flex border px-2 rounded-md mt-6">
                <FormLabel className="mt-2"><LockIcon/></FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} className="border-none outline-none bg-black" />
              </FormControl>
               
              </div>
             
              <FormMessage />
            </FormItem>
          )}
        />
         <div className="flex justify-end mt-2 mb-4 "><Link href='/'  className="text-blue-600 mt-0">Forgot Password?</Link></div>
        <Button type="submit" className="w-full bg-blue-800 text-[16px]">Login</Button>
      </form>
    </Form>
   
    </div>
  )
}
