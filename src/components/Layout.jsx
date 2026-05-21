import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Layout() {
  useScrollReveal();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 antialiased flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
