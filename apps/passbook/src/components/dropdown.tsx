import { CheveronIcon } from "assets/icons";

const Dropdown = ({
  options,
  heading,
  handleChange,
  value,
  className = "",
}) => {
  const isActive = (key: any) => {
    return key === value ? "bg-primary text-white" : "";
  };

  return (
    <div className={`dropdown dropdown-bottom ${className}`}>
      <label
        tabIndex={0}
        className="text-[11px] font-regular bg-white rounded px-3 py-2 text-black"
      >
        {heading}&nbsp;&nbsp;
        <CheveronIcon />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu py-2 shadow bg-base-100 rounded w-auto uppercase font-demi text-[12px] mt-2"
        onClick={handleChange}
      >
        {options &&
          options?.map((option: any) => (
            <li
              className={` ${isActive(option?.value)} text-[#313144]`}
              key={option?.value}
            >
              {/* @ts-ignore */}
              <a value={option?.value}>{option?.label}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
