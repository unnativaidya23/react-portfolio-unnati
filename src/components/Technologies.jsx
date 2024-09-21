import {FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  intial: {y:-10},
  animate: {
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
          whileInView={{opacity:1, y:0}}
          initial= {{y:-100, opacity:0}}
          transition={{duration:1.5}} 
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial= {{x:-100, opacity:0}}
        transition={{duration:1}}
        className="flex items-center justify-center gap-4 lg:flex-wrap">
            <motion.div 
            variants={iconVariants(4)}
            intial = "intial"
            animate ="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-500"/> 
            </motion.div>
            <motion.div 
             variants={iconVariants(6)}
             intial = "intial"
             animate ="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-sky-500"/>
            </motion.div>
            <motion.div  
            variants={iconVariants(4)}
            intial = "intial"
            animate ="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-green-500"/>
                </motion.div>
           <motion.div 
            variants={iconVariants(6)}
            intial = "intial"
            animate ="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div> 
            

            
        </motion.div>
    </div>
  )
}

export default Technologies