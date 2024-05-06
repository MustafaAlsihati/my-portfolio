import { useState, useRef, useEffect, MutableRefObject } from 'react';

export default function useAnimate(ref: MutableRefObject<any>) {
  const [animate, setAnimate] = useState(false);
  const observerRef = useRef<any>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setAnimate(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    observerRef.current.observe(ref.current);
    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return animate;
}
