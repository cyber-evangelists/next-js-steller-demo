"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="absolute rounded-full blur-3xl z-10"
      style={{
        left: cursorPosition.x - 50,
        top: cursorPosition.y - 50,
        width: "200px",
        height: "200px",
        backgroundColor: "rgba(191, 90, 242, 0.5)",
      }}
      animate={{
        opacity: 1,
      }}
    />
  );
};

export default CustomCursor;
