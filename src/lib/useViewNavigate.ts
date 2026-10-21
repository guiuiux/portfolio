// src/lib/useViewNavigate.ts
import { useNavigate } from "react-router";
import { flushSync } from "react-dom";

export function useViewNavigate() {
  const navigate = useNavigate();
  return (to: string) => {
    
    if (document.startViewTransition) {
      
      document.startViewTransition(() => {
        flushSync(() => navigate(to));
      });
    } else {
      navigate(to);
    }
  };
}
