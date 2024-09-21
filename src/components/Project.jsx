import { PROJECTS } from "../constants"
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial= {{y:-100, opacity:0}}
        transition={{duration:1.5}} 
        className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index)=>(
                <div key={index} className="mb-8 flex ">
                    <div className="w-full ">
                    <motion.img 
                    whileInView={{opacity:1, x:0}}
                    initial= {{x:-100, opacity:0}}
                    transition={{duration:0.5}}
                    className="lg:ml-60 mb-6 rounded border  lg:h-32" width={250}  src={project.image} alt="Spotify Clone"/>
                    </div>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial= {{x:100, opacity:0}}
                    transition={{duration:0.5}}
                     className="w-full  ">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                            {tech}
                        </span>

                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project