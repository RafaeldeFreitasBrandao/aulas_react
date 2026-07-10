
import './App.css';
import {motion} from "motion/react"

function App() {

  return (
    <>
    <motion.div initial={{opacity: 0 }} 
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
    >

      <h1>Hello World!</h1>
    </motion.div>
    </>
  )
}

export default App
