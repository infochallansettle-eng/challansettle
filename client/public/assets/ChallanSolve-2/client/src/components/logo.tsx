import logoImage from "@assets/Gemini_Generated_Image_fvtbwyfvtbwyfvtb_1755023759151.jpeg";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-auto" }: LogoProps) {
  return (
    <img
      src={logoImage}
      alt="ChallanSettle Logo"
      className={className}
    />
  );
}
