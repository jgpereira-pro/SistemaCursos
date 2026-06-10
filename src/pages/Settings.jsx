import { User, Bell, Shield, Sliders, Camera, Mail, Smartphone, MessageSquare, Key, Globe, Clock, ChevronRight } from "lucide-react";

export function Settings() {
  const scrollToSection = (id) => {
    document.getElementById(`settings-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { id: "profile", label: "Perfil", icon: User },
    { id: "notifications", label: "Notificações", icon: Bell },
    { id: "security", label: "Segurança", icon: Shield },
    { id: "preferences", label: "Preferências", icon: Sliders },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Configurações</h1>
        <p className="text-muted-foreground">Gerencie sua conta e preferências da plataforma</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sticky Nav */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="flex-1 space-y-6">
          <ProfileSection />
          <NotificationsSection />
          <SecuritySection />
          <PreferencesSection />
        </div>
      </div>
    </div>
  );
}

function SectionCard({ id, icon: Icon, iconColor, title, subtitle, children }) {
  return (
    <div id={`settings-${id}`} className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-sm scroll-mt-24">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className={`p-2 rounded-lg ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function Toggle({ defaultChecked }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
      <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
      <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
    </label>
  );
}

function ProfileSection() {
  return (
    <SectionCard
      id="profile"
      icon={User}
      iconColor="bg-primary/10 text-primary"
      title="Perfil"
      subtitle="Suas informações pessoais"
    >
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              JD
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-transform hover:scale-105 shadow-md">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center sm:text-left mt-2 sm:mt-0">
            <h3 className="text-2xl font-bold">João da Silva</h3>
            <p className="text-muted-foreground mt-1">Estudante • Entrou em Mar 2023</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nome Completo</label>
            <input type="text" defaultValue="João da Silva" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input type="email" defaultValue="joao.silva@exemplo.com" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Nome de Usuário</label>
            <input type="text" defaultValue="joaosilva99" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Telefone</label>
            <input type="tel" defaultValue="(11) 98765-4321" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-sm font-medium">Biografia</label>
            <textarea rows={4} defaultValue="Estudante de tecnologia apaixonado por desenvolvimento web e design de interfaces. Sempre em busca de novos conhecimentos e desafios para aprimorar minhas habilidades." className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all" />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-border">
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all active:scale-95 shadow-md shadow-primary/20">
            Salvar Alterações
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

function NotificationRow({ icon: Icon, iconColor, title, description, defaultChecked }) {
  return (
    <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-accent/30 transition-colors">
      <div className="flex gap-4">
        <div className={`p-2.5 rounded-lg h-fit ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      <Toggle defaultChecked={defaultChecked} />
    </div>
  );
}

function NotificationsSection() {
  return (
    <SectionCard
      id="notifications"
      icon={Bell}
      iconColor="bg-blue-500/10 text-blue-500"
      title="Notificações"
      subtitle="Escolha como e quando você quer ser notificado"
    >
      <div className="space-y-4">
        <NotificationRow
          icon={Mail}
          iconColor="bg-blue-500/10 text-blue-600"
          title="Notificações por Email"
          description="Receba atualizações importantes, lembretes de aulas e resumos semanais no seu email."
          defaultChecked
        />
        <NotificationRow
          icon={Smartphone}
          iconColor="bg-green-500/10 text-green-600"
          title="Notificações Push"
          description="Receba alertas em tempo real no seu navegador ou dispositivo móvel sobre novas atividades."
          defaultChecked
        />
        <NotificationRow
          icon={MessageSquare}
          iconColor="bg-purple-500/10 text-purple-600"
          title="Mensagens Diretas"
          description="Seja notificado imediatamente quando professores ou colegas de classe enviarem mensagens."
          defaultChecked
        />
      </div>
    </SectionCard>
  );
}

function SecuritySection() {
  return (
    <SectionCard
      id="security"
      icon={Shield}
      iconColor="bg-orange-500/10 text-orange-500"
      title="Segurança"
      subtitle="Mantenha sua conta segura e gerencie seus acessos"
    >
      <div className="space-y-8">
        <div className="space-y-5">
          <h4 className="font-semibold flex items-center gap-2 text-foreground">
            <Key className="w-5 h-5 text-primary" />
            Alterar Senha
          </h4>
          <div className="space-y-2">
            <label className="text-sm font-medium">Senha Atual</label>
            <input type="password" placeholder="••••••••" className="w-full max-w-md px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nova Senha</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirmar Nova Senha</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
            </div>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all active:scale-95 shadow-sm">
            Atualizar Senha
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-secondary/30 rounded-xl border border-border/50">
          <div>
            <h4 className="font-semibold mb-1 text-foreground">Autenticação de Dois Fatores (2FA)</h4>
            <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança requerendo um código além da senha.</p>
          </div>
          <button className="px-5 py-2.5 bg-secondary text-secondary-foreground border border-border rounded-lg font-medium hover:bg-secondary/80 transition-all whitespace-nowrap shadow-sm">
            Ativar 2FA
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

function PreferencesSection() {
  return (
    <SectionCard
      id="preferences"
      icon={Sliders}
      iconColor="bg-purple-500/10 text-purple-500"
      title="Preferências"
      subtitle="Personalize sua experiência na plataforma"
    >
      <div className="space-y-6 max-w-xl">
        <div className="space-y-2">
          <label className="text-sm font-medium">Idioma Principal</label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select className="w-full pl-10 pr-10 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none transition-all">
              <option>Português (Brasil)</option>
              <option>English (US)</option>
              <option>Español</option>
            </select>
            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground rotate-90" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Fuso Horário</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select className="w-full pl-10 pr-10 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none transition-all">
              <option>(GMT-03:00) Horário de Brasília</option>
              <option>(GMT-04:00) Manaus</option>
              <option>(GMT+00:00) UTC</option>
            </select>
            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground rotate-90" />
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <h4 className="font-semibold mb-2 text-destructive">Zona de Perigo</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Uma vez que você exclui sua conta, não há volta. Por favor, tenha certeza.
            </p>
            <button className="px-5 py-2.5 bg-destructive text-destructive-foreground rounded-lg font-medium hover:bg-destructive/90 transition-all active:scale-95 shadow-sm">
              Excluir Conta Permanentemente
            </button>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
