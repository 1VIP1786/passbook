import { CheveronIcon } from "assets/icons";

const Dropdown = ({
  options,
  heading,
  handleChange,
  value,
  className = "",
}) => {
  const isActive = (key: any) => {
    return value.includes(key) ? "bg-primary text-white" : "";
  };

  return (
    <div className={`dropdown dropdown-bottom ${className}`}>
      <label
        tabIndex={0}
        className="text-[11px] font-regular bg-white rounded px-3 py-2 text-appGray"
      >
        {heading}&nbsp;&nbsp;
        <CheveronIcon />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu py-2 shadow bg-base-100 rounded w-auto uppercase font-demi text-[12px] mt-2 cursor-pointer"
        onClick={handleChange}
      >
        <div className="max-h-[200px] overflow-y-scroll">
          {options &&
            options?.map((option: any) => (
              <li
                className={` ${isActive(option?.value)} text-[#313144] ${
                  value.includes(option?.value) ? "selected" : ""
                }`}
                key={option?.value}
              >
                {/* @ts-ignore */}
                <a value={option?.value}>{option?.label}</a>
              </li>
            ))}
        </div>
      </ul>
    </div>
  );
};

export default Dropdown;
