import { useEffect, useState } from "react";
import logoAnimation from "@/assets/logo_animation.gif";

const LoadingScreen = ({ isVisible }: { isVisible: boolean }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        transition: "opacity 500ms",
        opacity: isVisible ? 1 : 0,
      }}
      className={`${
        isVisible ? "" : "pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        <img
          src={logoAnimation}
          alt="Loading..."
          className="w-32 h-32 object-contain"
          style={{ width: "8rem", height: "8rem" }}
        />
        <div className="flex flex-col items-center text-center animate-text-pulse">
          <span
            className="text-3xl md:text-4xl font-black tracking-tighter leading-none uppercase text-white"
            style={{
              fontFamily: "Euclid Circular B, sans-serif",
              fontSize: "clamp(1.875rem, 5vw, 2.25rem)",
              fontWeight: 900,
              color: "#ffffff",
            }}
          >
            PROVEN PATH
          </span>
          <span
            className="text-lg md:text-xl font-medium tracking-wide leading-none mt-2 text-accent"
            style={{
              fontFamily: "Euclid Circular B, sans-serif",
              fontSize: "clamp(1.125rem, 3vw, 1.25rem)",
              fontWeight: 500,
              color: "#00D2FF",
            }}
          >
            Learning Service
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
