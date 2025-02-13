type Props = {
  charactersCount: number;
  characterLimit: boolean;
};
const CharacterCounter = ({ charactersCount, characterLimit }: Props) => {
  return (
    <div className="flex h-36 w-full flex-col justify-center self-start rounded-md bg-fuchsia-300 p-4 text-slate-950">
      <span
        className={`${characterLimit && charactersCount > 10 ? "text-red-600" : ""} text-7xl font-bold`}
      >
        {charactersCount}
        {characterLimit && <span className="text-3xl">/2000</span>}
      </span>
      <span className="text-lg">Total characters</span>
    </div>
  );
};

export default CharacterCounter;
