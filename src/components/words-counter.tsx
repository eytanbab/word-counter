type Props = {
  wordsCount: number;
};
const WordsCounter = ({ wordsCount }: Props) => {
  return (
    <div className="flex h-36 w-full flex-col justify-center self-start rounded-md bg-orange-300 p-4 text-slate-950">
      <span className="text-7xl font-bold">{wordsCount}</span>
      <span className="text-lg">Word Count</span>
    </div>
  );
};

export default WordsCounter;
