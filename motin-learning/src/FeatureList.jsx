import {motion, transform} from "motion/react";

const container = {
    hidden: {opacity:0},
    visible: {opacity:1, transition: {staggerChildren: 1}}
}

export function FeaturesList() {
    const features = ["Fast", "Declarative", "Powerfull", "Fun"];

    return (
        <motion.ul initial={{y: 10}} animate={{y:0}} transition={{duration:1, ease:"easeInOut"}}>
            {features.map((feature) => (

                <motion.li key={feature} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1}}>
                    {feature}
                </motion.li>

            ))}
        </motion.ul>
    )
}