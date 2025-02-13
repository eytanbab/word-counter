import { useEffect, useState } from "react";
import CharacterCounter from "./characters-counter";
import WordsCounter from "./words-counter";
import SentencesCounter from "./sentences-counter";

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
        <CharacterCounter
          charactersCount={charactersCount}
          characterLimit={characterLimit}
        />
        {/* Word counter */}
        <WordsCounter wordsCount={wordsCount} />
        {/* Sentences counter */}
        <SentencesCounter sentencesCount={sentencesCount} />
        {/* Letter Density */}
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
      </div>
    </div>
  );
};

export default Insights;
