import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom"; // <-- React Router Link

export default function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        setHeight(`${contentRef.current.scrollHeight}px`);
        const timeout = setTimeout(() => setHeight("auto"), 300);
        return () => clearTimeout(timeout);
      } else {
        setHeight(`${contentRef.current.scrollHeight}px`);
        requestAnimationFrame(() => setHeight("0px"));
      }
    }
  }, [open]);

  return (
    <div className="w-full">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-2 text-white rounded hover:bg-gray-700 transition"
      >
        <span>{title}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* Dropdown Items */}
      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="text-white mt-1 space-y-1 rounded px-3">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link} 
              className="block px-4 py-2 hover:bg-gray-700 text-sm transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}