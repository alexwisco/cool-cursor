import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
    },
    text: {
      height: 200,
      width: 200,
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      backgroundColor: "#e52165",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <div className="App">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>Cursor Practice</h1>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
}

export default App;