'use client';

import Image from 'next/image';
import {Card, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
    {
        avatar: '/clients/erp-rm.png',
        name: 'PT.ERPI',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, provident doloribus vitae natus placeat consequuntur?'
    },
    {
        avatar: '/clients/global-perkasa.jpeg',
        name: 'CV. GLOBAL PERKASA',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, provident doloribus vitae natus placeat consequuntur?'
    },
    {
        avatar: '/clients/haistar-rm.png',
        name: 'PT. HAISTAR',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, provident doloribus vitae natus placeat consequuntur?'
    },
    {
        avatar: '/clients/juki.jpeg',
        name: 'PT.JUKI SINGAPORE INDONESIA',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, provident doloribus vitae natus placeat consequuntur?'
    },
    {
        avatar: '/clients/ojek.png',
        name: 'OTORITAS JASA KEUANGAN',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, provident doloribus vitae natus placeat consequuntur?'
    },
    {
        avatar: '/clients/stefanie.png',
        name: 'KLINIK STEFANIE',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, provident doloribus vitae natus placeat consequuntur?'
    },
]

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
        <div className="container mx-auto">
            <h2 className='section-title mb-12 text-center mx-auto'>Client Kami</h2>
            {/* slider */}
            <Swiper slidesPerView={1} breakpoints={{
                640: {slidesPerView: 2},
                1400: {slidesPerView: 3},
            }} 
            spaceBetween={30} 
            modules={[Pagination]} 
            pagination={{clickable: true}}
            className='h-[350px]'
            >
                {reviewsData.map((person, index) => {
                    return <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader>
                                <div className='flex items-center gap-x-4'>
                                    {/* image */}
                                    <Image src={person.avatar} width={100} height={100} alt='avatar' priority />
                                    {/* name */}
                                    <div className='flex flex-col'>
                                        <CardTitle>{person.name}</CardTitle>
                                        {/* <p>{person.job}</p> */}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                        </Card>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews