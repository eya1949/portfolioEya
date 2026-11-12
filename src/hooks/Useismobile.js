import { useEffect, useState } from 'react';
 
const QUERY = '(max-width: 767px)'; // = en dessous du breakpoint md de Tailwind
 
export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(QUERY).matches);
 
  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
 
  return isMobile;
}