import Nav from './components/nav';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <div className='w-full h-screen flex justify-center bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50 bg-[url(/noise.svg)]'>
        <div className='max-w-7xl w-full flex flex-col items-center'>
          <Nav />
          <h1>Hello</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
