
import './App.css';
import {motion} from "motion/react"

function App() {

  return (
    <>
    <motion.div initial={{opacity: 0, y: 40}} 
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeInOut"}}
    >

      <h1>Hello World!</h1>
    </motion.div>
    </>
  )
}

export default App
