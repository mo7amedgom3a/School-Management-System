// src/components/Home/Header.tsx
import Link from 'next/link';
import  SchoolIcon  from "./SchoolIcon";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <SchoolIcon className="h-6 w-6" />
        <span className="sr-only">School Management System</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/Login" className="text-gray-800 hover:text-gray-900" prefetch={false}>
         sign in
        </Link>
        <Link href="/StudentRegister" prefetch={false}>
          Student Register
        </Link>
        <Link href="/TeacherRegister" className='text-gray-800 hover:text-gray-900' prefetch={false}>
         Teacher Register
        </Link>
      </nav>
    </header>
  );
}
