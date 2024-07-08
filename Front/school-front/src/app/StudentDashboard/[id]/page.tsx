// Import required hooks and components
'use client';
import React from 'react'
import { StudentComponent } from "@/components/student-component";
interface Params {
    params:any;
}
export default function StudentDashboardPage({params}:Params) {
    const id = params.id;
    if (!id){
        return <div>404</div>
    }
    return (
        <>
                <StudentComponent id={id}/>
        </>

    );
}
