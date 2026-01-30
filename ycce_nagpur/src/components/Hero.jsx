import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden bg-[#f4f6f8]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-cover"
        style={{
          backgroundImage:
            "url('https://ycce.edu/wp-content/uploads/2024/03/Website-Images-3.jpg')",
        }}
      />

      {/* White gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-white/90 via-gray-100/10 to-transparent" />

      {/* Content */}
      {/* Change max-w-6xl to max-w-7xl or max-w-[90%] */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-[70vh]"
      >
        <div className="max-w-xl m-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
            Yeshwantrao Chavan <br />
            College of Engineering
          </h1>

          <p className="mt-4 text-blue-950 text-xl font-semibold">
            From Thought to Thing
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#0b5ed7] hover:bg-[#084298] text-white px-6 py-3 rounded-lg font-medium shadow-md">
              Apply Now
            </button>

            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-right bg-cover"
          style={{ backgroundImage: "url('https://ycce.edu/wp-content/uploads/2024/03/Website-Images-3.jpg')" }}
        /> */}
      </motion.div>
    </section>
  );
};

export default Hero;
