type Props = {
  sentencesCount: number;
};

const SentencesCounter = ({ sentencesCount }: Props) => {
  return (
    <div className="flex h-36 w-full flex-col justify-center self-start rounded-md bg-red-300 p-4 text-slate-950">
      <span className="text-7xl font-bold">{sentencesCount}</span>
      <span className="text-lg">Sentence Count</span>
    </div>
  );
};

export default SentencesCounter;
