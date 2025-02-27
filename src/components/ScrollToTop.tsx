import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[rgb(44,116,179)] hover:bg-[rgb(44,116,179)]/90 text-white rounded-full shadow-lg animate-fade-up min-w-[44px] min-h-[44px]"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </Button>
      )}
    </>
  );
};