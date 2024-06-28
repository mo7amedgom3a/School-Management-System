// components/TeacherDashboard/TooltipLink.js
import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export function TooltipLink({ href, tooltip, icon: Icon, bgColor = "bg-accent", ...props }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${bgColor} text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
          prefetch={false}
          {...props}
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{tooltip}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{tooltip}</TooltipContent>
    </Tooltip>
  );
}
