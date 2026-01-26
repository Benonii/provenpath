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
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        <img
          src={logoAnimation}
          alt="Loading..."
          className="w-32 h-32 object-contain"
        />
        <div className="flex flex-col items-center text-center animate-text-pulse">
          <span
            className="text-3xl md:text-4xl font-black tracking-tighter leading-none uppercase text-white"
            style={{ fontFamily: "Euclid Circular B, sans-serif" }}
          >
            PROVEN PATH
          </span>
          <span
            className="text-lg md:text-xl font-medium tracking-wide leading-none mt-2 text-sb-primary"
            style={{ fontFamily: "Euclid Circular B, sans-serif" }}
          >
            Learning Service
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
