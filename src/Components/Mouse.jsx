import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Curseur personnalisé : un point qui suit la souris avec un léger retard.
// Monté uniquement sur les appareils à pointeur fin (voir App.jsx).
export default function Mouse() {
  const dot = useRef(null);

  useEffect(() => {
    const el = dot.current;
    if (!el) return;

    // Centrage géré par GSAP : ses transforms écraseraient les classes Tailwind.
    gsap.set(el, { xPercent: -50, yPercent: -50 });

    // quickTo évite de relancer une animation (et un rendu React) à chaque pixel.
    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' });

    let visible = false;
    const onMove = (e) => {
      if (!visible) {
        visible = true;
        gsap.to(el, { autoAlpha: 1, duration: 0.2 });
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };
    const onLeave = () => {
      visible = false;
      gsap.to(el, { autoAlpha: 0, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 rounded-full bg-hawkes-blue-600/60 opacity-0 transition-colors duration-300 dark:bg-hawkes-blue-300/50"
    />
  );
}
