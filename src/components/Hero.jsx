import { FirstImp_CONTENT } from "../constants"
import profilePic from "../assets/profilepic.jpg"
import { motion } from "framer-motion";

const container = (delay) =>({
    hidden: {x:-100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition : {duration: 0.5, delay: delay },
    }
})
const container2 = (delay) =>({
    hidden: {x:+100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition : {duration: 0.5, delay: delay },
    }
})

const FirstImp = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="lg:pb-16 text-6xl font-thin tracking-tight ">Unnati Vaidya</motion.h1>
                    <motion.span 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"> Frontend Developer</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible" 
                    style={{ wordSpacing: '0.13em' }} 
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {FirstImp_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2  ">
               <div className="flex justify-center ">
                <motion.img 
                variants={container2(1.2)}
                initial="hidden"
                animate="visible" 
                
                className=" rounded-2xl lg:ml-32 lg: mb-12" width={400} height={400} src={profilePic} alt="pp"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstImp