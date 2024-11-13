import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
    <div className='grid md:grid-cols-2 gap-20 items-center '>
    <div data-aos="zoom-in-up">
        <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">Technologies I work with</h2>
        <p className='text-gray-500 pt-2 '></p>
        I have a solid foundation in web development, specializing in HTML,CSS, and Javascript. My experience exted to using frameworks like React and Next.Js to create dynamic and interactive web applications. I'm also proficient in using Node.js to build server-side applications and APIs.I stay up-to-date with the latest industry trends and technologies to ensure that my work is cutting-edge and effective.
    </div>
    <div>
        <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
        <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">Typescript</h2>
            <h2 data-aos="zoom-in-up">React.js</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
        </div>
        <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">Tailwind</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>
        </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Skills
