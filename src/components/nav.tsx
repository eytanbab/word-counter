import { useTheme } from './theme-provider';

const Nav = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className='w-full p-4 flex items-center justify-between'>
      <h1>Logo</h1>
      <button onClick={handleTheme}>{theme}</button>
    </div>
  );
};

export default Nav;
