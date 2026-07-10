
import './App.css';
import {motion} from "motion/react"

function App() {

  return (
    <>
   <div className='container'>
    <motion.button whileHover={{scale:1.05, y: -2}}
                   whileTap={{scale:0.9, y: 1}}
                   transition={{type:"spring", stiffness: 350, damping: 15}}
    > 
      Get Started
    </motion.button>
   </div>
    </>
  )
}

export default App
