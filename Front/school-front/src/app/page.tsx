import Image from "next/image";
import { StudentComponent } from "@/components/student-component";
import { HomeComponent } from "@/components/home-component";
import { LoginComponent } from "@/components/login-component";
import { RegisterStudent } from "@/components/register-student";
import { AdminDashboard } from "@/components/admin-dashboard";
import { TeacherComponent } from "@/components/teacher-componentRegister";
import { TeacherDashboard } from "@/components/TeacherDashboard";


export default function Home() {
  return (
   <TeacherDashboard />
  );
}
