import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Circle Engineering',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'circle@gmail.com',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Sendangguwo RT10/01, Kec. Tembalang, Kota Semarang, Jawa Tengah 52304',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '088803905669',
    },
    // {
    //     icon: <GraduationCap size={20} />,
    //     text: 'Bachelor of Computer Science',
    // },
    // {
    //     icon: <Calendar size={20} />,
    //     text: 'Born on 20 Dec, 1997',
    // },
    // {
    //     icon: <Briefcase size={20} />,
    //     text: 'Fulltime',
    // },
];

const qualificationData = [
    {
        title: 'visi',
        data: [
            {
                university: 'Menjadi Perusahaan terpercaya dalam bidang pengadaan maupun perawatan sipil & elektrikal',
                qualification: 'Bachelor of Computer Science',
                years: '2015 - 2019',
            },
            // {
            //     university: 'Another University',
            //     qualification: 'Master of Computer Science',
            //     years: '2019 - 2021',
            // },
            // {
            //     university: 'Yet Another University',
            //     qualification: 'Ph.D in Computer Science',
            //     years: '2021 - 2025',
            // },
        ]
    },
    {
        title: 'misi',
        data: [
            {
                company: 'Memiliki sdm yang kompeten, berintegritas, dan tanggung jawab yang tinggi',
                role: 'Software Engineer',
                years: '2015 - 2019',
            },
            {
                company: 'Menyediakan produk yang berkualitas serta bergaransi',
                role: 'Software Engineer',
                years: '2015 - 2019',
            },
            {
                company: 'Memberikan layanan purna jual yang prima, tepat, dan cepat',
                role: 'Software Engineer',
                years: '2015 - 2019',
            },
        ]
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Javascript, PHP',
            },
            {
                name: 'Back-end Development',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
        ]
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    // console.log(getData(qualificationData, 'education'));
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Tentang Kami</h2>
            <div className="flex flex-col xl:flex-row">
                {/* imager */}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles='w-[505px] h-[205px] bg-no-repeat relative mx-auto top-40' imgSrc='/bg.png' />
                </div>
                {/* tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none">
                            <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Company</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Visi Misi</TabsTrigger>
                            {/* <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Pelayanan</TabsTrigger> */}
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg mt-12 xl:mt-8">
                            {/* personal */}
                            <TabsContent value="personal">
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">Kami merupakan penyedia jasa permasalahan elektrik</h3>
                                    <p className="subtitle max-w-xl max-auto xl:mx-0">Circle Engineering adalah perusahaan yang bergerak di bidang mekanikal dan electrical di bidang lingkungan, transmisi, distribusi dan swasta. Didirikan pada 4 juli 2020 di Semarang dan bekerja sama dengan perusahaan dan instansi terbaik di Indonesia.</p>
                                    {/* icons */}
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index) => {
                                            return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div className="text-primary">{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        })}
                                    </div>
                                    {/* languages */}
                                    {/* <div className="flex flex-col gap-y-2">
                                        <div className="text-primary">Language Skills</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, Bahasa Indonesia</div>
                                    </div> */}
                                </div>
                            </TabsContent>
                            {/* qualifications */}
                            <TabsContent value="qualifications">
                                <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left">Visi & Misi Kami</h3>
                                    {/* experience & education wrapper */}
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        {/* experience */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'misi').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'misi').data.map((item, index) => {
                                                    const {company, role, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                {/* <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                <div className="text-base font-medium">{years}</div> */}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28} />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'visi').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'visi').data.map((item, index) => {
                                                    const {university, qualification, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                {/* <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div> */}
                                                                {/* <div className="text-base font-medium">{years}</div> */}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* skills */}
                            <TabsContent value="skills">
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-8">Jasa & Pelayanan Kami</h3>
                                    {/* skills */}
                                    <div className="mb-16">
                                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        {/* skill list */}
                                        <div>
                                            {getData(skillData, 'skills').data.map((item, index) => {
                                                const {name} = item;
                                                return (
                                                    <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                        <div className="font-medium">{name}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {/* tools */}
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        {/* tool list */}
                                        <div className="flex gap-x-8 justify-center xl:justify-start">
                                            {getData(skillData, 'tools').data.map((item, index) => {
                                                const {imgPath} = item;
                                                return (
                                                    <div key={index}>
                                                        <Image src={imgPath} width={48} height={48} alt="tool" priority/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About