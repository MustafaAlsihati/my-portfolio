interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const IconButton = ({ children, ...props }: Props) => {
  return (
    <button
      className="flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-800 text-white font-bold p-3 rounded-full focus:outline-none focus:ring focus:ring-gray-300"
      {...props}>
      {children}
    </button>
  );
};
