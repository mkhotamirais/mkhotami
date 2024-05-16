import { useSelector } from "react-redux";

export const Section = ({ children, className }) => {
  return <section className={`${className} px-3 lg:px-12`}>{children}</section>;
};
Section.propTypes;

export const H1 = ({ children = "H1", className }) => (
  <div className={`${className} leading-loose text-xl capitalize font-bold`}>{children}</div>
);
H1.propTypes;

export const H2 = ({ children = "H2", className }) => (
  <div className={`${className} leading-relaxed text-lg capitalize font-medium`}>{children}</div>
);
H2.propTypes;

export const H3 = ({ children = "H3", className }) => (
  <div className={`${className} leading-normal text-base capitalize font-medium`}>{children}</div>
);
H3.propTypes;

export const Label = ({ children = "Label", id, className }) => (
  <label htmlFor={id} className={`${className} text-sm font-medium capitalize block py-1`}>
    {children}
  </label>
);
Label.propTypes;

export const Input = ({ type = "text", id, value, onChange, autoFocus, autoComplete = "off", placeholder, className }) => (
  <input
    type={type}
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    autoFocus={autoFocus}
    autoComplete={autoComplete}
    placeholder={placeholder}
    className={`${className} border rounded p-1 block w-full bg-inherit mb-2 focus:outline-cyan-500`}
  />
);
Input.propTypes;

export const Select = ({ children, id, value, onChange, className, multiple }) => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      multiple={multiple}
      className={`${className} ${dark ? "bg-slate-800" : "bg-white"} border rounded p-2 mb-2 w-full`}
    >
      {children}
    </select>
  );
};
Select.propTypes;

export const Textarea = ({ id, value, onChange, className }) => (
  <textarea
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    className={`${className} border rounded p-2 block w-full bg-inherit mb-2`}
  />
);
Textarea.propTypes;
