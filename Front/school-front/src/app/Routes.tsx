import {TeacherComponent} from "@/components/teacher-componentRegister"
import { StudentComponent } from "@/components/student-component";
import { HomeComponent } from "@/components/home-component";
import { useRouter } from "next/router";

export default function Routes() {
    const router = useRouter();
    
    switch (router.pathname) {
        case "/teacher":
        return <TeacherComponent />;
        case "/student":
        return <StudentComponent />;
        default:
        return <HomeComponent />;
    }
}