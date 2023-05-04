interface ButtonProps {
  className: string;
  onClick: (event: any) => void;
  text: string;
}

export const Button = (props: ButtonProps) => {
  const { className, onClick, text } = props;
  return (
    <>
      <button
        className={`${className} rounded bg-[#DB6027] py-2 px-10 text-white hover:bg-[#c0440b]`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
