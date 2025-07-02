import React from 'react'
function About(){
    return(
        <div className='  text-white p-2 md:p-10  '>
           <h1 className='font-bold text-5xl mb-15 mt-3 text-center'>ABOUT ME</h1>

               <div className='flex flex-col pl-4 pr-50  md:flex-row gap-3 md:gap-2 items-center justify-between'>
            <div className="relative w-full max-w-md mx-auto">
          <div className="absolute  top-8 right-8 w-full h-full border-9 border-cyan-500 rounded-sm z-0"></div>
          <img src="src/components/image.png" alt="" className="relative z-10 rounded-lg shadow-lg w-full"/>
        </div>
            <div>
           
           <p className=' mb-20 mt-23 md:mt-7 max-w-xl  text-gray-400 leading-relaxed text-justify'>
            I’m Emnet Befkadu, a dedicated full stack developer with a strong foundation in both
             frontend and backend technologies. I build responsive and dynamic applications using HTML, CSS, 
             JavaScript, and React on the frontend, and Java, PHP, and MySQL on the backend. My passion for 
             development has driven me to constantly learn and build real-world projects, both independently 
             and in team settings. I’ve also taken part in tech communities like GDG, where I enhanced my skills
              and participated in a hackathon where my team placed second. Through these experiences, I’ve grown 
              not only as a developer but also as a collaborator who values teamwork, problem-solving, and delivering
               high-quality solutions.
</p>
</div>
</div>
        </div>
    )
}
export default About;
