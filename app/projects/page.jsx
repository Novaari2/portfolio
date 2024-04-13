'use client';
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
      image: '/product/panel2.jpg',
      category: 'panel',
      name: 'Panel Ats',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
      link: '/',
      github: '/',
  },
  {
      image: '/product/panel-pompa.jpeg',
      category: 'panel',
      name: 'Panel Pompa',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
      link: '/',
      github: '/',
  },
  {
      image: '/product/smart-home.jpeg',
      category: 'smart home',
      name: 'Smart Home',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
      link: '/',
      github: '/',
  },
  {
      image: '/product/penangkal.jpeg',
      category: 'penangkal petir',
      name: 'Penangkal Petir Elektro Statis',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
      link: '/',
      github: '/',
  },
  {
      image: '/product/panel.jpeg',
      category: 'panel',
      name: 'Panel LVMDP & SDP',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda? Qui, provident perspiciatis! Enim, soluta?',
      link: '/',
      github: '/',
  }
];

// remove category duplicates
console.log(projectData.map((item) => item.category))
const uniqueCategories = ['semua produk', ...new Set(projectData.map((item) => item.category))];
console.log(uniqueCategories);

const page = () => {
  const [catgories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('semua produk');

  const filteredProjects = projectData.filter(project => {
    // if category is all projects return all projects else filter by category
    return category === 'semua produk' ? project : project.category === category
  })

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Produk Kami</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {catgories.map((category, index) => {
              return (
              <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default page