import { motion } from "framer-motion";
import "./Events.css";

const Events = () => {
  return (
    <section className="events">
      <h2>Upcoming Events</h2>

      <div className="event-grid">
        {[
          ["CSS Showdown 2.0", "30 January 2026"],
          ["AI & ML Workshop", "10 February 2026"],
          ["Startup Bootcamp", "20 February 2026"]
        ].map((e, i) => (
          <motion.div
            key={i}
            className="event-card"
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
          >
            <h3>{e[0]}</h3>
            <p>{e[1]}</p>
            <button>Know More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
