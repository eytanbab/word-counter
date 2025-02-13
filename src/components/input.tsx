import { ChangeEvent } from "react";
import Checkbox from "./checkbox";

type Props = {
  text: string;
  handleText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  includeSpace: boolean;
  characterLimit: boolean;
  handleIncludeSpaceChange: () => void;
  handleCharacterLimitChange: () => void;
};

const Input = ({
  text,
  handleText,
  includeSpace,
  characterLimit,
  handleIncludeSpaceChange,
  handleCharacterLimitChange,
}: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <textarea
        className="h-96 w-full resize-none rounded-md bg-slate-200 px-4 py-2 focus:outline-2 focus:outline-slate-400 dark:bg-slate-900/60 dark:focus:outline-slate-700"
        onChange={(e) => handleText(e)}
        value={text}
        placeholder="type / paste anything..."
      />

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
