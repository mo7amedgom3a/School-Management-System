// components/ui/Checkbox.js
export function Checkbox({ id, ...props }) {
    return (
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        {...props}
      />
    );
  }
  