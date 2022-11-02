import { useEffect, useState } from "react";
import Kiki from "../components/Kiki/Kiki";

export default function Home() {
  const [coor, setCoor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCoor({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return (
    <div className="w-screen h-screen p-16 pb-40 bg-[url('assets\images\background.jpeg')] bg-cover flex flex-col justify-center">
      <div className="flex justify-center gap-4">
        <div className="flex flex-col text text-center w-1/2 gap-3 text-white">
          <h1 className="text-2xl">Hello there, I'm</h1>
          <h1 className="text-7xl">BENZ TAN</h1>
          <div className="w-48 h-1 mx-auto bg-white" />
          <h1 className="text-2xl">
            UI / UX Designer & Frontend Web Developer
          </h1>
        </div>
        <div className="w-1/2">
          <div
            className="absolute m-0 top-0 left-0"
            style={{
              transform: `translate(${coor.x}px,${coor.y}px)`,
              transition: "transform 2.5s cubic-bezier(.32,2,.55,.27)",
              // transform 2s cubic-bezier(.32,2,.55,.27)
            }}
          >
            <Kiki />
          </div>
        </div>
      </div>
    </div>
  );
}
