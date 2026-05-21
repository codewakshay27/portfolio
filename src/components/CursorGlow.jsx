import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-40"
      style={{
        transform: `translate(${position.x - 100}px, ${position.y - 100}px)`
      }}
    >
      <div className="w-52 h-52 bg-green-500 opacity-20 blur-3xl rounded-full"></div>
    </div>
  );
};

export default CursorGlow;