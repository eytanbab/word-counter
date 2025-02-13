import { useEffect, useState } from "react";
import CharacterCounter from "./characters-counter";
import WordsCounter from "./words-counter";
import SentencesCounter from "./sentences-counter";
import LetterDensity from "./letter-density";

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
        <LetterDensity charFreq={charFreq} charactersCount={charactersCount} />
      </div>
    </div>
  );
};

export default Insights;
