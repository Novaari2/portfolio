'use client';
import Socials from "./Socials";
import { useState } from "react";
import Image from 'next/image';


const Footer = () => {
  const [phoneNumber] = useState('+6288803905669'); 

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
};
  return (
    <footer className="bg-secondary py-12">
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between">
              {/* socials */}
              <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconStyles='text-primary dark:text-white/70 hover:text-white text-[20px] dark:hover:text-primary transition-all' />
              {/* copyright */}
              <div className="text-muted-foreground">
                Copyright &copy; Circle Engineering. All rights reserved.
              </div>
              <div className="fixed right-10 bottom-10 z-50 cursor-pointer" onClick={handleWhatsAppClick}>
                <Image src="/wa.png" alt="WhatsApp Icon" width={65} height={65} />
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer