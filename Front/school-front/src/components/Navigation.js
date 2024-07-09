// components/Navigation.js
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" passHref>
          <a className="text-lg font-bold">EduPlatform</a>
        </Link>
        <div className="space-x-4">
          <Link href="/" passHref>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/Login" passHref>
            <a className="hover:underline">Login</a>
          </Link>
          <Link href="/teacher/dashboard" passHref>
            <a className="hover:underline">Teacher Dashboard</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
