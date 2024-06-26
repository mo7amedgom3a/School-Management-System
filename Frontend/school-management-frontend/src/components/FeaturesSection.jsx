import React from 'react';
import { BookIcon, CalendarIcon, MailIcon, UserIcon, AdminIcon, TeacherIcon } from './Icons';
import '../assets/css/Home.css';

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col justify-center space-y-4 pp">
    <div className="grid gap-1">
      <div className="flex items-center gap-2">
        <Icon className="w-6 h-6" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl home-container">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pp">
              Our school management system offers a range of powerful features to streamline your school's operations.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Feature
            icon={UserIcon}
            title="Student Enrollment"
            description="Easily manage student enrollment, including registration, admission, and withdrawal."
          />
          <Feature
            icon={CalendarIcon}
            title="Attendance Tracking"
            description="Keep track of student attendance and generate detailed reports."
          />
          <Feature
            icon={BookIcon}
            title="Grade Management"
            description="Streamline the process of recording, calculating, and reporting student grades."
          />
          <Feature
            icon={MailIcon}
            title="Parent-Teacher Communication"
            description="Facilitate effective communication between parents and teachers."
          />
          <Feature
            icon={AdminIcon}
            title="Admin Dashboard"
            description="Access a comprehensive dashboard to manage all aspects of the school."
          />
          <Feature
            icon={TeacherIcon}
            title="Teacher Portal"
            description="Empower teachers with tools to manage their classes and communicate with students."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
