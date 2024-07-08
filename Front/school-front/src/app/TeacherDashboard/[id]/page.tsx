'use client';
import React from 'react'
import { TeacherDashboard } from "@/components/TeacherDashboard";
interface Params {
    params:any;
}
export default function Teacherdashboard({params}:Params){
    return <TeacherDashboard id={params.id} />;
}