import { ChangeEvent } from "react";
import Checkbox from "./checkbox";
import { useCharacterFrequency } from "../hooks/useCharacterFrequency";

type Props = {
  text: string;
  handleText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  includeSpace: boolean;
  characterLimit: boolean;
  handleIncludeSpaceChange: () => void;
  handleCharacterLimitChange: () => void;
};

const WPM = 183;

const Input = ({
  text,
  handleText,
  includeSpace,
  characterLimit,
  handleIncludeSpaceChange,
  handleCharacterLimitChange,
}: Props) => {
  const { wordsCount } = useCharacterFrequency(text, includeSpace);

  function secondsToTime(wordsCount: number) {
    // calculate average reading time in seconds (2.5 min => 150 seconds)
    const avgReadingTime = (wordsCount / WPM) * 60;

    const h = Math.floor(avgReadingTime / 3600)
        .toString()
        .padStart(2, "0"),
      m = Math.floor((avgReadingTime % 3600) / 60)
        .toString()
        .padStart(2, "0"),
      s = Math.floor(avgReadingTime % 60)
        .toString()
        .padStart(2, "0");

    return h + ":" + m + ":" + s;
    //return `${h}:${m}:${s}`;
  }

  const avgReadingTime = secondsToTime(wordsCount);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <textarea
        className="h-96 w-full resize-none rounded-md bg-slate-200 px-4 py-2 focus:outline-2 focus:outline-slate-400 dark:bg-slate-900/60 dark:focus:outline-slate-700"
        onChange={(e) => handleText(e)}
        value={text}
        placeholder="type / paste anything..."
      />
      {/* Avg reading time */}

      <p className="self-end text-sm text-slate-500 dark:text-slate-400">
        Avg. reading time: {avgReadingTime}
      </p>

      {/* Checkboxes */}
      <div className="flex w-full flex-col gap-2">
        {/* Exclude space checkbox */}
        <Checkbox
          checked={includeSpace}
          setChecked={handleIncludeSpaceChange}
          label="Include Spaces"
        />
        {/* Character limit checkbox */}
        <Checkbox
          checked={characterLimit}
          setChecked={handleCharacterLimitChange}
          label="Set Character Limit (2000)"
        />
      </div>
    </div>
  );
};

export default Input;
