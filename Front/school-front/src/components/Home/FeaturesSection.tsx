// src/components/Home/FeaturesSection.tsx
export function FeaturesSection() {
    return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features for Teachers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empower your teachers with tools to manage classes, track student progress, and communicate effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/Teacher.jpg"
                width="550"
                height="310"
                alt="Teacher"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Attendance Tracking</h3>
                      <p className="text-muted-foreground">Easily mark student attendance and generate reports.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Gradebook Management</h3>
                      <p className="text-muted-foreground">Streamline grading and provide feedback to students.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Communication Tools</h3>
                      <p className="text-muted-foreground">Engage with students and parents through announcements and messaging.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features for Students</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empower your students with tools to track their progress, communicate with teachers, and access educational resources.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/Student.jpg"
                width="550"
                height="310"
                alt="Student"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Grade Tracking</h3>
                      <p className="text-muted-foreground">View your grades and progress in real-time.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Assignment Submissions</h3>
                      <p className="text-muted-foreground">Submit your assignments and receive feedback from teachers.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Communication with Teachers</h3>
                      <p className="text-muted-foreground">Engage with your teachers and ask questions directly.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features for Administrators</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empower your administrators with tools to manage school operations, track data, and make informed decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/Admin.jpg"
                width="550"
                height="310"
                alt="Admin"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Enrollment Management</h3>
                      <p className="text-muted-foreground">Streamline the student enrollment process and maintain accurate records.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Reporting and Analytics</h3>
                      <p className="text-muted-foreground">Generate comprehensive reports and analyze school data to make informed decisions.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">User Management</h3>
                      <p className="text-muted-foreground">Manage user accounts and permissions for teachers, students, and staff.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  