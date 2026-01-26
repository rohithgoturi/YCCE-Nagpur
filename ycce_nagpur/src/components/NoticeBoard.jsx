import { motion } from "framer-motion";
import "./NoticeBoard.css";

const NoticeBoard = () => {
  return (
    <motion.section
      className="notice"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>📢 Notice Board</h2>

      {[
        "ICETEMS 2026 – International Conference",
        "International Conference on AI (ICMARAI-26)",
        "Call for Papers – Sustainability & Innovation"
      ].map((item, i) => (
        <motion.div
          key={i}
          className="notice-card"
          whileHover={{ scale: 1.03 }}
        >
          <span className="new">NEW</span>
          <p>{item}</p>
        </motion.div>
      ))}

      <button className="view-btn">View All Notices</button>
    </motion.section>
  );
};

export default NoticeBoard;
