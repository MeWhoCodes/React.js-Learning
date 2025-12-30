import { useState } from "react";
import "./App.css";

export default function App() {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [siz, setSize] = useState(100);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPos({
      x: e.clientX - siz/2,
      y: e.clientY - siz/2,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className={`circle ${dragging ? "dragging" : ""}`}
        onMouseDown={handleMouseDown}
        style={{
          width: `${siz}px`,
          height: `${siz}px`,
          left: pos.x,
          top: pos.y,
        }}
      />

      <input type="range"  name="Size" value={siz} min={10} max={1000} onChange={(e)=>{setSize(e.target.value)}}/>
      <div style={{color: "white"}}>Size: {siz}</div>
    </div>
  );
}
