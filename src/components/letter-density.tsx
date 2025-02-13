type Props = {
  charFreq: Record<string, number>;
  charactersCount: number;
};

const LetterDensity = ({ charFreq, charactersCount }: Props) => {
  if (!charactersCount) {
    return (
      <p className="font-light text-slate-600 dark:text-slate-400">
        No characters found. Start typing to see letter density.
      </p>
    );
  }

  const letterDensity = Object.entries(charFreq).sort((a, b) => b[1] - a[1]);

  const maxWidth = letterDensity[0][1].toString().length + 7;

  return (
    <div className="w-full">
      <h1 className="text-lg font-bold">Letter Density</h1>
      {letterDensity.map(([char, count]) => (
        <div className="flex w-full items-center gap-2">
          {/* Letter */}
          <span className="w-[2ch]">{char}</span>
          <div className="relative h-4 w-full rounded-full bg-slate-300 dark:bg-slate-700">
            <div
              style={{
                width: `${Math.round((count / charactersCount) * 100)}%`,
              }}
              className="absolute h-full rounded-full bg-fuchsia-300"
            ></div>
          </div>
          <span
            style={{ width: maxWidth + "ch" }}
            className="shrink-0 text-right"
          >
            {count} ({Math.round((count / charactersCount) * 100) / 100}%)
          </span>
        </div>
      ))}
    </div>
  );
};

export default LetterDensity;
