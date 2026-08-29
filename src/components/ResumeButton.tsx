import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/data/profile";

interface ResumeButtonProps {
  variant?: "hero" | "glow";
  size?: "sm" | "lg";
  label?: string;
  className?: string;
}

/** Shared resume download button used by Navbar and Hero. */
const ResumeButton = ({ variant = "glow", size = "sm", label = "Resume", className }: ResumeButtonProps) => (
  <Button variant={variant} size={size} asChild className={className}>
    <a href={PROFILE.resumePath} download={PROFILE.resumeFileName}>
      <FileText className="w-4 h-4" />
      {label}
    </a>
  </Button>
);

export default ResumeButton;
