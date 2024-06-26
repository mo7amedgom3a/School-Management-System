export function Select ({ id, value, onChange, required, children }) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      {children}
    </select>
  );
}