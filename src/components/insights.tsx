type Props = {
  text: string;
  includeSpace: boolean;
  characterLimit: boolean;
};

const Insights = ({ text, includeSpace, characterLimit }: Props) => {
  const charactersCount = includeSpace
    ? text.length
    : text.replace(/\s/g, "").length;

  const wordsCount = text.match(/\w+/g)?.length ?? 0;
  const sentencesCount = text.match(/[\w|\)][.?!](\s|$)/g)?.length ?? 0;

  return (
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
    </div>
  );
};

export default Insights;
