import { useEffect, useState } from "react";

type FreqMap = Record<string, number>;

export const useCharacterFrequency = (text: string, includeSpace: boolean) => {
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

  return { charFreq, charactersCount, wordsCount, sentencesCount };
};
