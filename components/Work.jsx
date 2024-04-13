'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

//components
import ProjectCard from './ProjectCard';

const projectData = [
    {
        image: '/product/panel2.jpg',
        category: 'react js',
        name: 'Panel Ats',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
        link: '/',
        github: '/',
    },
    {
        image: '/product/panel-pompa.jpeg',
        category: 'next js',
        name: 'Panel Pompa',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
        link: '/',
        github: '/',
    },
    {
        image: '/product/smart-home.jpeg',
        category: 'next js',
        name: 'Smart Home',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
        link: '/',
        github: '/',
    },
    {
        image: '/product/penangkal.jpeg',
        category: 'next js',
        name: 'Penangkal Petir Elektro Statis',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
        link: '/',
        github: '/',
    },
    {
        image: '/product/panel.jpeg',
        category: 'next js',
        name: 'Panel LVMDP & SDP',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
        link: '/',
        github: '/',
    }
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className="container mx-auto">
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Produk Untuk Anda</h2>
                <p className='subtitle mb-8'>Kami berikan produk berkualitas tinggi, Silahkan anda melihat produk-produk kami lainnya.</p>
                <Link href='/projects'>
                    <Button>Lihat Semua Produk</Button>
                </Link>
            </div>
            {/* slider */}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper slidesPerView={1} breakpoints={{640: {
                    slidesPerView: 2,
                }
                }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }} className='h-[520px]'>
                    {/* show only first 4 projects for the slides */}
                    {projectData.slice(0, 4).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work