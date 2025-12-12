import { cn } from "@/lib/utils";

interface HudBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const HudBackground = ({ className, children }: HudBackgroundProps) => {
  return (
    <div className={cn("relative min-h-screen overflow-hidden bg-background", className)}>
      {/* Grid pattern */}
      <div className="absolute inset-0 hud-grid opacity-40" />
      
      {/* Radial glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--glow-blue)/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--glow-green)/0.05)_0%,transparent_40%)]" />
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-4 left-4 w-16 h-[1px] bg-gradient-to-r from-secondary to-transparent" />
        <div className="absolute top-4 left-4 w-[1px] h-16 bg-gradient-to-b from-secondary to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-4 right-4 w-16 h-[1px] bg-gradient-to-l from-secondary to-transparent" />
        <div className="absolute top-4 right-4 w-[1px] h-16 bg-gradient-to-b from-secondary to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-4 left-4 w-16 h-[1px] bg-gradient-to-r from-secondary to-transparent" />
        <div className="absolute bottom-4 left-4 w-[1px] h-16 bg-gradient-to-t from-secondary to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-4 right-4 w-16 h-[1px] bg-gradient-to-l from-secondary to-transparent" />
        <div className="absolute bottom-4 right-4 w-[1px] h-16 bg-gradient-to-t from-secondary to-transparent" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none opacity-20" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HudBackground;
