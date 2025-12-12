import { cn } from "@/lib/utils";
import { 
  Scale, 
  BarChart3, 
  Shield, 
  Calculator, 
  FileText, 
  Settings, 
  Building2, 
  Server,
  LucideIcon
} from "lucide-react";

interface ModuleIconProps {
  name: string;
  icon: LucideIcon;
  angle: number;
  radius: number;
  isActive?: boolean;
  onClick?: () => void;
}

const ModuleIcon = ({ name, icon: Icon, angle, radius, isActive, onClick }: ModuleIconProps) => {
  const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
  const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute group transition-all duration-300 ease-out",
        "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
      )}
      style={{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
        left: "50%",
        top: "50%",
      }}
    >
      <div className={cn(
        "relative flex flex-col items-center gap-2",
      )}>
        {/* Icon container */}
        <div className={cn(
          "relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center",
          "border border-border/50 bg-card/80 backdrop-blur-sm",
          "transition-all duration-300",
          "group-hover:border-primary group-hover:bg-card",
          "group-hover:shadow-[0_0_30px_hsl(var(--glow-green)/0.3)]",
          isActive && "border-primary shadow-[0_0_30px_hsl(var(--glow-green)/0.4)]"
        )}>
          {/* Corner accents */}
          <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t border-l border-secondary/60 group-hover:border-primary transition-colors" />
          <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t border-r border-secondary/60 group-hover:border-primary transition-colors" />
          <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b border-l border-secondary/60 group-hover:border-primary transition-colors" />
          <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b border-r border-secondary/60 group-hover:border-primary transition-colors" />
          
          <Icon className={cn(
            "w-7 h-7 md:w-8 md:h-8 text-secondary transition-colors duration-300",
            "group-hover:text-primary",
            isActive && "text-primary"
          )} strokeWidth={1.5} />
        </div>
        
        {/* Label */}
        <span className={cn(
          "text-xs md:text-sm font-medium text-muted-foreground text-center whitespace-nowrap",
          "transition-colors duration-300",
          "group-hover:text-foreground group-hover:glow-text-green",
          isActive && "text-foreground glow-text-green"
        )}>
          {name}
        </span>
      </div>
    </button>
  );
};

export const moduleData = [
  { name: "ODR", icon: Scale },
  { name: "Analytics & Jurimetria", icon: BarChart3 },
  { name: "Regtech", icon: Shield },
  { name: "Taxtech", icon: Calculator },
  { name: "CLM", icon: FileText },
  { name: "Legal Ops", icon: Settings },
  { name: "LMS", icon: Building2 },
  { name: "Infra / Admin", icon: Server },
];

export default ModuleIcon;
