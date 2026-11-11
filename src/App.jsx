import Mouse from './Components/Mouse';
import Nav from './Components/Nav';

export default function App() {
  return (
    <div className="bg-victoria-100 dark:bg-victoria-950 h-screen w-full overflow-hidden transition-colors duration-300">
      <Nav />
      <Mouse />
    </div>
  );
}