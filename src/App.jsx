import Mouse from './Components/Mouse';
import Nav from './Components/Nav';

// Pas de curseur personnalisé sur écran tactile
const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export default function App() {
  return (
    <div className="bg-victoria-100 dark:bg-victoria-950 h-[100dvh] w-full overflow-hidden transition-colors duration-300 motion-reduce:transition-none">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-hawkes-blue-700 focus:shadow-lg dark:focus:bg-victoria-800 dark:focus:text-hawkes-blue-300"
      >
        Aller au contenu
      </a>
      <Nav />
      {hasMouse && <Mouse />}
    </div>
  );
}
