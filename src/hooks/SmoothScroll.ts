import { useEffect } from "react";

// Add SmoothScroll type to window
declare global {
  interface Window {
    SmoothScroll?: (options: {
      animationTime?: number;
      stepSize?: number;
      accelerationDelta?: number;
      accelerationMax?: number;
      keyboardSupport?: boolean;
      arrowScroll?: number;
    }) => void;
  }
}

export default function useSmoothScroll(): void {
  useEffect(() => {
    const smoothScrollScript: HTMLScriptElement = document.createElement("script");
    smoothScrollScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js";
    smoothScrollScript.async = true;

    smoothScrollScript.onload = () => {
      if (window.SmoothScroll) {
        window.SmoothScroll({
          animationTime: 1500,
          stepSize: 100,
          accelerationDelta: 50,
          accelerationMax: 3,
          keyboardSupport: true,
          arrowScroll: 50,
        });
      }
    };

    document.body.appendChild(smoothScrollScript);

    return () => {
      document.body.removeChild(smoothScrollScript);
    };
  }, []);
}
