import { motion } from "framer-motion";
import "./Highlights.css";

const data = [
  "40+ Years of Excellence",
  "NAAC A++ Accredited",
  "Top Placements",
  "Research & Innovation Hub"
];

const Highlights = () => {
  return (
    <section className="highlights">
      {data.map((item, i) => (
        <motion.div
          key={i}
          className="card"
          whileHover={{ y: -10, scale: 1.03 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </section>
  );
};

export default Highlights;
