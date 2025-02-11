import { ChangeEvent, useState } from "react";
import Input from "./components/input";
import Insights from "./components/insights";
import Nav from "./components/nav";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const [text, setText] = useState("");
  const [includeSpace, setIncludeSpace] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(false);

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleIncludeSpaceChange = () => {
    setIncludeSpace((prev) => !prev);
  };

  const handleCharacterLimitChange = () => {
    setCharacterLimit((prev) => !prev);
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex min-h-screen w-full justify-center bg-slate-50 bg-[url(/noise.svg)] text-slate-950 dark:bg-slate-950 dark:text-slate-50">
        <div className="flex w-full max-w-7xl flex-col items-center gap-8 p-4">
          <Nav />
          <h1 className="text-center text-4xl font-bold">
            Analyze your text in real-time.
          </h1>
          <Input
            text={text}
            handleText={handleText}
            includeSpace={includeSpace}
            handleIncludeSpaceChange={handleIncludeSpaceChange}
            characterLimit={characterLimit}
            handleCharacterLimitChange={handleCharacterLimitChange}
          />
          <Insights
            text={text}
            includeSpace={includeSpace}
            characterLimit={characterLimit}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
