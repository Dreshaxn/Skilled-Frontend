import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({
  size = "md",
  showText = true,
  className = "",
}: LogoProps) {
  const sizes = {
    sm: { width: 300, height: 120 },
    md: { width: 400, height: 160 },
    lg: { width: 650, height: 260 },
  };

  const { width, height } = sizes[size];

  // For navbar (md size), allow larger height
  const maxHeight =
    size === "md" ? "110px" : size === "sm" ? "100px" : undefined;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/clearSkilled.png"
        alt="Skilled Logo"
        width={width}
        height={height}
        className="object-contain"
        style={{
          width: "auto",
          height: maxHeight || "auto",
          maxHeight: maxHeight,
        }}
        priority
      />
    </div>
  );
}
