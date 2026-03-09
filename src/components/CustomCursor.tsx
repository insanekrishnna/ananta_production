import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    const addHoverListeners = () => {
      const els = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .cursor-hover");
      els.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      observer.disconnect();
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
      }}
    >
      <div
        className="rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
        style={{
          width: hovering ? 48 : 12,
          height: hovering ? 48 : 12,
          opacity: visible ? 1 : 0,
          transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
        }}
      />
    </div>
  );
};

export default CustomCursor;
