import './App.css';
import './index.css';

import { Suspense, useEffect, useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { useDarkMode } from './hooks/useDarkMode';
import Home from './pages/Home';
import Projects from './pages/Projects';

const initializeDarkMode = () => {
  // Check local storage first
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const AppLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { toggleDarkMode } = useDarkMode();

  return (
    <Suspense>
      <div className="min-h-screen bg-pink-50 dark:bg-slate-900 dark:text-white">
        {/* Navigation */}
        <nav className="p-6 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            <img
              src="/images/avatar.png"
              alt="Linh Nguyễn"
              className="w-10 h-10 rounded-full"
            />
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/projects"
              className="hover:text-pink-500 transition-colors font-medium"
            >
              Projects
            </Link>
            <a
              href="https://cv.nvlinh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-2"
            >
              My CV
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <a
              href="https://blog.nvlinh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-2"
            >
              Blog
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <a
              href="https://github.com/vanlinh1602"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-2"
            >
              GitHub
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-10">
              <div
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={
                  'hover:bg-gray-100 rounded-lg dark:hover:bg-slate-800 text-black p-2 dark:text-white'
                }
              >
                ☰
              </div>

              {/* Mobile Menu Dropdown */}
              {isMobileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-2">
                  <Link
                    to="/projects"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <a
                    href="https://cv.nvlinh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-2"
                  >
                    My CV
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://blog.nvlinh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-2"
                  >
                    Blog
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/vanlinh1602"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center gap-2"
                  >
                    GitHub
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div onClick={toggleDarkMode} className="p-2 rounded-full ml-4">
              <img
                width="30"
                height="30"
                className="block dark:hidden"
                src="https://img.icons8.com/?size=256&id=9313&format=png&color=89AC46"
                alt="sun--v1"
              />
              <img
                width="30"
                className="hidden dark:block"
                height="30"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB3UlEQVR4nO2VwUobURSGs7DVLpQSLfOfIGTTlW/gCxQkoi3YN3BRKLgquBBJpVt9C/ERulKCc86EBKwrtWIj1JV7C1o9l95yJ4lJ1JnMSOJCcuDA3Dtn7nf/c//LZDKD6EGo0LxKbu7pwYxrFfx9OqDvzargyghZl+7ZzfUfHHiFe+DAKyRewO5lXhjBJyNgFTpXxkyqDTig4CrVru3uBBnBj+auG7mYWnkqpd/fDhvGftgmpt/OIPWW0TtlbKrgRBmXKnSqgq0byU0nWdcIVQyjHF0Q0FIDWrPV3LgyXdxR3pHK9E+ZNmwpMxQNBbe+AT9cxFQNFwyw0BjvxIFbJqL1SDDDv61l+A8WqdAfV2DLk9lwHHiFROC68qPQVEw1ZVqzpfxIh2qOgHaAZXy0be5bEvj9hLTDu5vAKfDpfft8qJxpx22sabiE8JVkYPY+11uHY1vKv7773vp4o4KzpGBl/EwEtgdTL43QXhOuTB9sJTvmztwwPrprlKbdKmQM40vXlruCDhf2KhnbsXDDWO059BZOy5FgZfzqF1iFDqPBqRybEsy4jFFMtf4pxkkceK1vZywoRoJtefKV+4v03lgI3NqR4CZcmb46o4X38PFmMnWzotgVOohBPIv4D9w67fx1MKCQAAAAAElFTkSuQmCC"
                alt="partly-cloudy-night--v1"
              />
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </Suspense>
  );
};

function App() {
  useEffect(() => {
    initializeDarkMode();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    ),
    {
      basename: '/',
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
