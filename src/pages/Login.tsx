import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import HudBackground from "@/components/HudBackground";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (email === "demo@toruslab.com" && password === "12345") {
      toast({
        title: "Acesso autorizado",
        description: "Bem-vindo ao Sistema Jurídico Unificado"
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Acesso negado",
        description: "Credenciais inválidas. Tente novamente.",
        variant: "destructive"
      });
    }
    setIsLoading(false);
  };
  return <HudBackground>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md animate-fade-in" style={{
        animationDelay: "0.1s"
      }}>
          {/* Logo/Shield */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 border border-secondary/50 flex items-center justify-center bg-card/50 backdrop-blur-sm">
                <Shield className="w-10 h-10 text-primary animate-glow-pulse" strokeWidth={1} />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-primary" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-primary" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-foreground mb-2">TORUSFLOW</h1>
          <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-8">ECOSSISTEMA JURÍDICO</p>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative p-6 md:p-8 hud-border bg-card/30 backdrop-blur-sm">
              {/* Corner decorations */}
              <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-primary" />

              <div className="space-y-5">
                {/* Email field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest text-secondary">
                    Login
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="usuario@email.com" className="pl-10 bg-input/50 border-secondary/30 focus:border-primary text-foreground placeholder:text-muted-foreground/50" required />
                  </div>
                </div>

                {/* Password field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-xs uppercase tracking-widest text-secondary">
                    Senha
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="pl-10 bg-input/50 border-secondary/30 focus:border-primary text-foreground placeholder:text-muted-foreground/50" required />
                  </div>
                </div>

                {/* Submit button */}
                <Button type="submit" disabled={isLoading} className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow-green)/0.4)]">
                  {isLoading ? <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span>Verificando...</span>
                    </div> : "Acessar Sistema"}
                </Button>
              </div>
            </div>
          </form>

          {/* Test credentials */}
          <div className="mt-6 text-center">
            <div className="inline-block p-4 border border-secondary/20 bg-card/20 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-widest text-secondary/80 mb-2">
                Acesso de Teste
              </p>
              <p className="text-sm text-secondary font-mono">
                login: <span className="text-foreground">demo@toruslab.com</span>
              </p>
              <p className="text-sm text-secondary font-mono">
                senha: <span className="text-foreground">12345</span>
              </p>
            </div>
          </div>

          {/* Status indicator */}
          <div className="mt-8 flex justify-center items-center gap-2 text-xs text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-widest">Sistema Online</span>
          </div>
        </div>
      </div>
    </HudBackground>;
};
export default Login;