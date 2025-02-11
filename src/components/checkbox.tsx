type Props = {
  checked: boolean;
  setChecked: () => void;
  label: string;
};

const Checkbox = ({ checked, setChecked, label }: Props) => {
  return (
    <div className="flex w-full items-center gap-2">
      <input
        className="size-4 appearance-none rounded-sm bg-transparent outline-2 outline-indigo-600 checked:bg-indigo-500 checked:ring-2 checked:ring-indigo-500 checked:outline-slate-50 hover:cursor-pointer dark:checked:bg-indigo-500"
        type="checkbox"
        checked={checked}
        onChange={setChecked}
      />
      <span className="text-slate-600 dark:text-slate-300">{label}</span>
    </div>
  );
};

export default Checkbox;
