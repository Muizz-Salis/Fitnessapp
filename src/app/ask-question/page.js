"use client";

import Navbar2 from "@/components/Navbar2";
import { useRouter } from "next/navigation";

export default function AskQuestion() {
      const router = useRouter();

    return (
        <div className="min-h-screen bg-black">
             <section 
        className="relative h-screen  items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/darkbck.png')" }} >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <Navbar2/>
                </section>

        </div>
    );
}