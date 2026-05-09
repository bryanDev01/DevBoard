"use client"

import { useState } from "react";
import { Badge } from "./Badge";

export function BadgeList() {
  const [count, setCount] = useState<number>(0)
  
  const handleClick = () => {
    console.log("Hijo estas haciendo click dentro de mi");
  };

  return (
    <section className="px-3 pt-3 pb-3 w-full h-full">
      <div className=" flex justify-center items-center gap-2">
        <button onClick={() => {
          setCount(count - 1) // ❌ BAD
          setCount(count - 1)
          setCount(count - 1)
          }} className=" bg-amber-300 rounded px-2 py-1">-</button>
          <span className=" font-semibold text-lg">{count}</span>
        <button onClick={() => {
          setCount((count) => count + 1) // ✅ GOOD (Forma funcional del estado)
          setCount((count) => count + 1)
          setCount((count) => count + 1)
        }} className=" bg-amber-600 rounded px-2 py-1">+</button> 
      </div>
      <div className=" grid grid-cols-3 gap-3 px-3 py-3">
        <Badge status="completed" onClick={handleClick} />
        <Badge status="active" onClick={handleClick} />
        <Badge status="paused" onClick={handleClick} />
        <Badge onClick={handleClick} />
      </div>
    </section>
  );
}
