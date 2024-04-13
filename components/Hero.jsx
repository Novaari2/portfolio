import Link from "next/link";
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import { Button } from "./ui/button";
import {Download, Send} from "lucide-react";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-white bg-no-repeat bg-bottom bg-cover dark:bg-transparent">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/* text */}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Circle Engineering</div>
                    <h1 className="h1">Kami siap menyelesaikan permasalahan anda</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                        Pilih teknisi yang tepat untuk menyelesaikan permasalahan elektrikal anda
                    </p>
                    {/* buttons */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href='/contact'>
                            <Button className="gap-x-2">Contact Me <Send size={18} /></Button>
                        </Link>
                        {/* <Button variant='secondary' className="gap-x-2">Download CV <Download size={18} /></Button> */}
                    </div>
                    {/* Socials */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                </div>
                {/* image */}
                <div className="hidden xl:flex relative">
                    {/* badge 1 */}
                    {/* <Badge containerStyles='absolute top-[24%] -left-[5rem]' icon={<RiBriefcase4Fill />} endCountNum={3} badgeText='Years Of Experience' /> */}
                    {/* badge 2 */}
                    {/* <Badge containerStyles='absolute top-[80%] -left-[1rem]' icon={<RiTodoFill />} endCountNum={6} endCounttext='k' badgeText='Finished Project' /> */}
                    {/* badge 3 */}
                    {/* <Badge containerStyles='absolute top-[55%] -right-8' icon={<RiTeamFill />} endCountNum={9} endCounttext='k' badgeText='Happy Client' /> */}
                    {/* <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div> */}
                    <DevImg containerStyles="bg-hero_shape w-[310px] h-[462px] bg-no-repeat relative bg-bottom right-20" imgSrc='/hero/hero.jpg' />
                </div>
            </div>
            {/* icon */}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </div>
    </section>
  )
}

export default Hero