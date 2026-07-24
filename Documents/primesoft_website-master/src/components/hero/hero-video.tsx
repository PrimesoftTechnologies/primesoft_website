import { motion } from "motion/react";

const HeroVideo = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center"
      >
        <video
          className="h-auto w-full max-w-5xl rounded-2xl shadow-lg"
          autoPlay
          muted
          loop
          playsInline
          src="/images/video.mp4"
        />
      </motion.div>
    );
}
export default HeroVideo