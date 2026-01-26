import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NoticeBoard from "./components/NoticeBoard";
import Highlights from "./components/Highlights";
import Events from "./components/Events";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {/* <ScrollProgress /> */}
      <Navbar />
      <Hero />
      {/* <NoticeBoard />
      <Highlights />
      <Events />
      <Footer /> */}
    </>
  );
};

export default App;
