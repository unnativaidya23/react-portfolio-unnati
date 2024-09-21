import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <motion.h2 
         whileInView={{opacity:1, y:0}}
         initial= {{y:-100, opacity:0}}
         transition={{duration:1.5}} 
         className="my-20 text-center text-4xl"> About
            <span className="text-neutral-500"> Me</span> </motion.h2> 
            <div className=" lg:flex ">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex lg:items-start items-center justify-center">
                       <motion.img
                       whileInView={{opacity:1, x:0}}
                       initial= {{x:-100, opacity:0}}
                       transition={{duration:0.5}}
                       className="rounded-2xl " width={300} height={300} src={aboutImg} alt="about"/>
                    </div>
                </div>
                <div className="w-full ">
                        <div className="flex flex-wrap   justify-center ">
                            <motion.p 
                             whileInView={{opacity:1, x:0}}
                             initial= {{x:100, opacity:0}}
                             transition={{duration:0.5}}
                            className="my-2  leading-none max-w-xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</motion.p>
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default About