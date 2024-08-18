import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 120,
      once: true
    });
  }, []);
  return <div className="w-full max-w-screen-2xl">{children}</div>;
}
