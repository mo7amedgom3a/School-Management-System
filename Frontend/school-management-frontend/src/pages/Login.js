// pages/login.js
import { LoginCard } from "../components/LoginCard"
import { SchoolIcon } from "../components/SchoolIcon";
import Navbar from "../components/Navbar";
import '../assets/css/login.css'
export default function LoginPage() {
  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <SchoolIcon className="h-12 w-12" />
          <h2 className="text-2xl font-bold pp">School Management System</h2>
        </div>
        <LoginCard />
      </div>
    </div>
    </>

  );
}
