import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import HudBackground from "@/components/HudBackground";
import ModuleIcon, { moduleData } from "@/components/ModuleIcon";

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Sessão encerrada",
      description: "Você foi desconectado com segurança.",
    });
    navigate("/");
  };

  const handleModuleClick = (moduleName: string) => {
    setActiveModule(moduleName);
    toast({
      title: moduleName,
      description: `Acessando módulo ${moduleName}...`,
    });
  };

  const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 130 : 200;

  return (
    <HudBackground>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="relative z-20 p-4 md:p-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-secondary/50 flex items-center justify-center">
                <Hexagon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                Painel de Controle
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 uppercase tracking-widest text-xs"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Outer rotating ring */}
            <div 
              className="absolute inset-0 animate-rotate-slow"
              style={{
                width: radius * 2 + 160,
                height: radius * 2 + 160,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-30">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="url(#gradient-ring)"
                  strokeWidth="0.3"
                  strokeDasharray="2 4"
                />
                <defs>
                  <linearGradient id="gradient-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--secondary))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Connection lines */}
            <svg
              className="absolute pointer-events-none"
              style={{
                width: radius * 2 + 100,
                height: radius * 2 + 100,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {moduleData.map((_, index) => {
                const angle1 = (360 / moduleData.length) * index - 90;
                const angle2 = (360 / moduleData.length) * ((index + 1) % moduleData.length) - 90;
                const x1 = Math.cos(angle1 * (Math.PI / 180)) * radius + (radius + 50);
                const y1 = Math.sin(angle1 * (Math.PI / 180)) * radius + (radius + 50);
                const x2 = Math.cos(angle2 * (Math.PI / 180)) * radius + (radius + 50);
                const y2 = Math.sin(angle2 * (Math.PI / 180)) * radius + (radius + 50);
                return (
                  <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#line-gradient)"
                    strokeWidth="1"
                  />
                );
              })}
              {/* Lines to center */}
              {moduleData.map((_, index) => {
                const angle = (360 / moduleData.length) * index - 90;
                const x = Math.cos(angle * (Math.PI / 180)) * radius + (radius + 50);
                const y = Math.sin(angle * (Math.PI / 180)) * radius + (radius + 50);
                return (
                  <line
                    key={`center-${index}`}
                    x1={radius + 50}
                    y1={radius + 50}
                    x2={x}
                    y2={y}
                    stroke="url(#line-gradient)"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                );
              })}
            </svg>

            {/* Module circle container */}
            <div
              className="relative"
              style={{
                width: radius * 2 + 100,
                height: radius * 2 + 100,
              }}
            >
              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  {/* Outer glow */}
                  <div className="absolute inset-0 -m-4 bg-primary/10 blur-2xl rounded-full animate-glow-pulse" />
                  
                  {/* Hub container */}
                  <div className="relative w-28 h-28 md:w-36 md:h-36 border border-primary/50 bg-card/60 backdrop-blur-md flex flex-col items-center justify-center">
                    {/* Corner accents */}
                    <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-primary" />
                    <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-2 border-r-2 border-primary" />
                    <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-2 border-l-2 border-primary" />
                    <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-primary" />
                    
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-secondary mb-1">
                      Sistema
                    </span>
                    <span className="text-sm md:text-base font-medium tracking-widest text-foreground glow-text-green">
                      JURÍDICO
                    </span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-secondary mt-1">
                      Unificado
                    </span>
                  </div>
                </div>
              </div>

              {/* Module icons */}
              {moduleData.map((module, index) => (
                <ModuleIcon
                  key={module.name}
                  name={module.name}
                  icon={module.icon}
                  angle={(360 / moduleData.length) * index}
                  radius={radius}
                  isActive={activeModule === module.name}
                  onClick={() => handleModuleClick(module.name)}
                />
              ))}
            </div>
          </div>
        </main>

        {/* Footer status */}
        <footer className="p-4 md:p-6">
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="uppercase tracking-widest">8 Módulos Ativos</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <span className="uppercase tracking-widest">v2.0.1</span>
          </div>
        </footer>
      </div>
    </HudBackground>
  );
};

export default Dashboard;
