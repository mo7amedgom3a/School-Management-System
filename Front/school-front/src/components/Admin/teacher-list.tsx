
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function TeacherList() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Teachers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-muted-foreground">Math</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">john@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (123) 456-7890</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-semibold">Jane Smith</h4>
                <p className="text-muted-foreground">English</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">jane@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (987) 654-3210</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-semibold">Michael Johnson</h4>
                <p className="text-muted-foreground">Science</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">michael@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 555-5555</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-semibold">Sarah Lee</h4>
                <p className="text-muted-foreground">History</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">sarah@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (111) 111-1111</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
