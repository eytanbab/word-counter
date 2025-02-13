import { useEffect, useState } from "react";

type Props = {
  text: string;
  includeSpace: boolean;
  characterLimit: boolean;
};

type FreqMap = Record<string, number>;

const Insights = ({ text, includeSpace, characterLimit }: Props) => {
  const [charFreq, setCharFreq] = useState<FreqMap>({});

  const charactersCount = includeSpace
    ? text.length
    : text.replace(/\s/g, "").length;

  const wordsCount = text.match(/\w+/g)?.length ?? 0;
  const sentencesCount = text.match(/[\w|\])][.?!](\s|$)/g)?.length ?? 0;

  useEffect(() => {
    const characterFrequencies = (text: string) => {
      const charArray = String(text?.match(/\w+/g)).split("");
      const frequency = charArray.reduce((acc: FreqMap, char: string) => {
        if (char != ",") {
          acc[char] = (acc[char] || 0) + 1;
        }
        return acc;
      }, {});

      setCharFreq(frequency);
    };
    characterFrequencies(text);
  }, [text]);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-4">
        {/* Character counter */}
        <div className="flex h-36 w-full flex-col justify-center self-start rounded-md bg-fuchsia-300 p-4 text-slate-950">
          <span className="text-7xl font-bold">{charactersCount}</span>
          <span className="text-lg">Total characters</span>
        </div>
        {/* Word counter */}
        <div className="flex h-36 w-full flex-col justify-center self-start rounded-md bg-orange-300 p-4 text-slate-950">
          <span className="text-7xl font-bold">{wordsCount}</span>
          <span className="text-lg">Word Count</span>
        </div>
        {/* Sentences counter */}
        <div className="flex h-36 w-full flex-col justify-center self-start rounded-md bg-red-300 p-4 text-slate-950">
          <span className="text-7xl font-bold">{sentencesCount}</span>
          <span className="text-lg">Sentence Count</span>
        </div>
        {/* Letter Density */}
        <div className="w-full">
          <h1 className="text-lg font-bold">Letter Density</h1>
          {text ? (
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
      </div>
    </div>
  );
};

export default Insights;
