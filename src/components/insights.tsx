import CharacterCounter from "./characters-counter";
import WordsCounter from "./words-counter";
import SentencesCounter from "./sentences-counter";
import LetterDensity from "./letter-density";
import { useCharacterFrequency } from "../hooks/useCharacterFrequency";

type Props = {
  text: string;
  includeSpace: boolean;
  characterLimit: boolean;
};

const Insights = ({ text, includeSpace, characterLimit }: Props) => {
  const { charFreq, charactersCount, wordsCount, sentencesCount } =
    useCharacterFrequency(text, includeSpace);

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
