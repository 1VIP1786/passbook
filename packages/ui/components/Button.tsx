interface ButtonProps {
  className: string;
  onClick: (event: any) => void;
  text: string;
  id?: string;
}

export const Button = (props: ButtonProps) => {
  const { className, onClick, text, id } = props;
  return (
    <>
      <button
        className={`${className} rounded bg-[#E1703B] py-2 px-10 text-white hover:bg-[#c0440b]`}
        onClick={onClick}
        id={id}
      >
        {text}
      </button>
    </>
  );
};
