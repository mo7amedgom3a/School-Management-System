import { TeacherDashboard } from "@/components/TeacherDashboard";
export default function Teacherdashboard({ params }){
    return <TeacherDashboard id={params.id} />;
}