import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../features/theme/themeSlice';

const themes = ["light", "dark", "cupcake", "retro", "synthwave", "valentine", "cyberpunk"];

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    // Apply the theme when the component mounts
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className='inline-flex rounded-md shadow-sm' role='group'>
      {themes.map((theme, index) => (
        <button
          key={theme}
          onClick={() => handleThemeChange(theme)}
          className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border ${
            index === 0 ? 'rounded-l-lg' : index === themes.length - 1 ? 'rounded-r-lg' : ''
          } ${
            currentTheme === theme
              ? 'bg-blue-700 text-white border-blue-700'
              : 'border-gray-200 hover:bg-gray-100 hover:text-blue-700'
          } focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggler;
