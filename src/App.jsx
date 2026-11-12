import Mouse from './Components/Mouse';
import Nav from './Components/Nav';

// Pas de curseur personnalisé sur écran tactile
const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export default function App() {
  return (
    <div className="bg-victoria-100 dark:bg-victoria-950 h-[100dvh] w-full overflow-hidden transition-colors duration-300">
      <Nav />
      {hasMouse && <Mouse />}
    </div>
  );
}