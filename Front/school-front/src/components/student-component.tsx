import { useEffect, useState } from 'react';

import  fetchStudentData  from '../app/api/students';
import Header from './Student/StudentDashboardHeader';
import { CoursesCard } from '@/components/Student/CoursesCard';
import { ProgressCard } from '@/components/Student/ProgressCard';
import { AttendanceCard } from '@/components/Student/AttendanceCard';
import { HomeworkCard } from '@/components/Student/HomeworkCard';
import { ExamsCard } from '@/components/Student/ExamsCard';
import LoadingPage from './loadingPage';
import { UploadHomeworkCard } from '@/components/Student/UploadHomeworkCard';
import {jwtDecode} from 'jwt-decode';


interface CourseTeachers {
  teacherName: string;
  courseName: string;
  courseId: number;
}

interface CourseGrades {
  totalGrade: number;
  courseName: string;
  studentMark: number;
}
interface homeworks{
  homeworkId: number;
  title: string;
  description: string;
  dueDate: string;
  courseName: string;
  status: string;
}
interface courseExams{
  name: string;
  status: string;
  maxMark: number;
  date: string;
  courseName: string;
}

interface StudentData {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  enrollDate: string;
  address: string;
  imgUrl: string;
  deptId: number;
  currentYear: string;
  departmentName: string;
  totalGrade: number;
  numberOfCourses: number;
  courseGrades: CourseGrades[];
  completedHomeworkCount: number;
  pendingHomeworkCount: number;
  courseNames: string[];
  courseTeachers: CourseTeachers[];
  courseExams: courseExams[];
  classAttendance: number;
  classMissed: number;
  homeworks: homeworks[];
}

export function StudentComponent({id}: {id: number}) {
  const token = localStorage.getItem('authToken') ?? '';
  const decodedToken = jwtDecode(token);
  const userRole = (decodedToken as { [key: string]: string })["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

  const [studentData, setStudentData] = useState<StudentData | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const data = await fetchStudentData(Number(id));
          setStudentData(data);
        } catch (error) {
          console.error('Error fetching student data:', error);
        }
      };
      fetchData();
    }
  }, [id]);


      if (!studentData) {
        
          return <LoadingPage/>;
      }
      if (userRole !== "Student" || token === null || token === undefined) {
        alert('Unauthorized: You are not a Student.');
        return null;
      }
      else{
        return (
          <div className="flex flex-col min-h-screen bg-muted/40">
            <Header/>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <CoursesCard courseTeachers={studentData.courseTeachers}  />
                <ProgressCard CourseGrades={studentData.courseGrades} totalGrade={studentData.totalGrade}/>
                <AttendanceCard classAttendance={studentData.classAttendance} classMissed={studentData.classMissed}/>
                <HomeworkCard HomeWorks={studentData.homeworks}/>
                <ExamsCard courseExams={studentData.courseExams}/>
                <UploadHomeworkCard HomeWorks={studentData.homeworks} studentId={studentData.id} />
              </div>
            </main>
          </div>
        );
      }
}
