export  function Table({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">{children}</table>
    </div>
  );
}
export function TableHeader({ children }) {
    return <thead>{children}</thead>;
}
export function TableRow({ children }) {
    return <tr>{children}</tr>;
}
export function TableHead({ children }) {
    return <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">{children}</th>;
}
export function TableBody({ children }) {
    return <tbody>{children}</tbody>;
}
export function TableCell({ children }) {
    return <td className="px-6 py-4 whitespace-nowrap">{children}</td>;
}
