export const PlusIcon = () => {
  return (
    <div className="group relative">
      <svg
        className="w-4 fill-slate-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
      </svg>

      <div className="text-darkGray absolute left-1/2 w-28 -translate-x-1/2 transform rounded px-2 py-1 text-center text-xs opacity-0 transition-opacity group-hover:opacity-100">
        Create Blog
      </div>
    </div>
  );
};
