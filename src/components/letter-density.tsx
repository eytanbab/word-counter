import React from "react";

type Props = {
  charFreq: Record<string, number>;
  charactersCount: number;
};

const LetterDensity = ({ charFreq, charactersCount }: Props) => {
  return (
    <div className="w-full">
      <h1 className="text-lg font-bold">Letter Density</h1>
      {charFreq ? (
        Object.entries(charFreq)
          .sort((a, b) => b[1] - a[1])
          .map(([char, count]) => (
            <div className="flex w-full items-center gap-2">
              {/* Letter */}
              <span>{char}</span>
              <div className="relative h-4 w-full rounded-full bg-slate-300 dark:bg-slate-700">
                <div
                  style={{
                    width: `${Math.round((count / charactersCount) * 100)}%`,
                  }}
                  className="absolute h-full rounded-full bg-fuchsia-300"
                ></div>
              </div>
              <span className="">
                {count} ({Math.round((count / charactersCount) * 100)}%)
              </span>
            </div>
          ))
      ) : (
        <p className="font-light text-slate-600 dark:text-slate-400">
          No characters found. Start typing to see letter density.
        </p>
      )}
    </div>
  );
};

export default LetterDensity;
