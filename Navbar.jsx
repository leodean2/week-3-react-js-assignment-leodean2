    import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800 p-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  )
}

export default Navbar;
 