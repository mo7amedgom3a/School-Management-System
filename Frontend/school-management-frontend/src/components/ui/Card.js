// components/ui/Card.js
export function Card({ children }) {
    return <div className="bg-white shadow-md rounded-lg p-6">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <div className="border-b border-gray-200 pb-4 mb-4">{children}</div>;
  }
  
  export function CardTitle({ children }) {
    return <h2 className="text-lg font-semibold">{children}</h2>;
  }
  
  export function CardDescription({ children }) {
    return <p className="text-gray-600">{children}</p>;
  }
  
  export function CardContent({ children }) {
    return <div className="space-y-4">{children}</div>;
  }
  
  export function CardFooter({ children }) {
    return <div className="pt-4 border-t border-gray-200">{children}</div>;
  }
  