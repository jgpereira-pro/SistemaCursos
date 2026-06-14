import { User, Bell, Shield, Sliders, Camera, Mail, Smartphone, MessageSquare, Key, Globe, Clock, ChevronRight } from "lucide-react";

import { CartaoDeSecao } from "../componentes/CartaoDeSecao/index.jsx";
import { LinhaDeNotificacao } from "../componentes/LinhaDeNotificacao/index.jsx";
import { Button } from "../componentes/button/index.jsx";

import styles from "./Configuracoes.module.css";

const itensNavegacao = [
  { id: "perfil", label: "Perfil", icon: User },
  { id: "notificacoes", label: "Notificações", icon: Bell },
  { id: "seguranca", label: "Segurança", icon: Shield },
  { id: "preferencias", label: "Preferências", icon: Sliders },
];

export function Configuracoes() {
  const irParaSecao = (id) => {
    document.getElementById(`config-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.pagina}>

      <header className={styles.cabecalho}>
        <h1 className={styles.titulo}>Configurações</h1>
        <p className={styles.subtitulo}>Gerencie sua conta e preferências da plataforma</p>
      </header>

      <div className={styles.layout}>

        {/* Menu lateral de navegação */}
        <nav className={styles.menuLateral}>
          {itensNavegacao.map((item) => (
            <button key={item.id} onClick={() => irParaSecao(item.id)} className={styles.itemMenu}>
              <item.icon size={20} className={styles.iconeMenu} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Seções */}
        <div className={styles.secoes}>

          {/* Perfil */}
          <CartaoDeSecao id="perfil" icon={User} corIcone={styles.iconePrimario} titulo="Perfil" subtitulo="Suas informações pessoais">
            <div className={styles.perfilTopo}>
              <div className={styles.avatarArea}>
                <div className={styles.avatar}>JD</div>
                <button className={styles.avatarBotao}>
                  <Camera size={16} />
                </button>
              </div>
              <div>
                <h3 className={styles.perfilNome}>João da Silva</h3>
                <p className={styles.perfilCargo}>Estudante • Entrou em Mar 2023</p>
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.campo}>
                <label className={styles.label}>Nome Completo</label>
                <input type="text" defaultValue="João da Silva" className={styles.input} />
              </div>
              <div className={styles.campo}>
                <label className={styles.label}>Email</label>
                <input type="email" defaultValue="joao.silva@exemplo.com" className={styles.input} />
              </div>
              <div className={styles.campo}>
                <label className={styles.label}>Nome de Usuário</label>
                <input type="text" defaultValue="joaosilva99" className={styles.input} />
              </div>
              <div className={styles.campo}>
                <label className={styles.label}>Telefone</label>
                <input type="tel" defaultValue="(11) 98765-4321" className={styles.input} />
              </div>
              <div className={`${styles.campo} ${styles.campoLargo}`}>
                <label className={styles.label}>Biografia</label>
                <textarea rows={4} defaultValue="Estudante de tecnologia apaixonado por desenvolvimento web e design de interfaces." className={styles.textarea} />
              </div>
            </div>

            <div className={styles.acoes}>
              <Button variant="primary">Salvar Alterações</Button>
            </div>
          </CartaoDeSecao>

          {/* Notificações */}
          <CartaoDeSecao id="notificacoes" icon={Bell} corIcone={styles.iconeAzul} titulo="Notificações" subtitulo="Escolha como e quando você quer ser notificado">
            <div className={styles.listaNotificacoes}>
              <LinhaDeNotificacao
                icon={Mail}
                corIcone={styles.iconeAzul}
                titulo="Notificações por Email"
                descricao="Receba atualizações importantes, lembretes de aulas e resumos semanais no seu email."
                defaultChecked
              />
              <LinhaDeNotificacao
                icon={Smartphone}
                corIcone={styles.iconeVerde}
                titulo="Notificações Push"
                descricao="Receba alertas em tempo real no seu navegador ou dispositivo móvel sobre novas atividades."
                defaultChecked
              />
              <LinhaDeNotificacao
                icon={MessageSquare}
                corIcone={styles.iconeRoxo}
                titulo="Mensagens Diretas"
                descricao="Seja notificado imediatamente quando professores ou colegas de classe enviarem mensagens."
              />
            </div>
          </CartaoDeSecao>

          {/* Segurança */}
          <CartaoDeSecao id="seguranca" icon={Shield} corIcone={styles.iconeLaranja} titulo="Segurança" subtitulo="Mantenha sua conta segura e gerencie seus acessos">
            <div className={styles.blocoSeguranca}>
              <div className={styles.grupoSenha}>
                <h4 className={styles.tituloGrupo}>
                  <Key size={20} />
                  Alterar Senha
                </h4>
                <div className={styles.campo}>
                  <label className={styles.label}>Senha Atual</label>
                  <input type="password" placeholder="••••••••" className={styles.input} />
                </div>
                <div className={styles.formGrid}>
                  <div className={styles.campo}>
                    <label className={styles.label}>Nova Senha</label>
                    <input type="password" placeholder="••••••••" className={styles.input} />
                  </div>
                  <div className={styles.campo}>
                    <label className={styles.label}>Confirmar Nova Senha</label>
                    <input type="password" placeholder="••••••••" className={styles.input} />
                  </div>
                </div>
                <Button variant="primary">Atualizar Senha</Button>
              </div>

              <div className={styles.caixa2fa}>
                <div>
                  <h4 className={styles.titulo2fa}>Autenticação de Dois Fatores (2FA)</h4>
                  <p className={styles.descricao2fa}>Adicione uma camada extra de segurança requerendo um código além da senha.</p>
                </div>
                <Button variant="secondary">Ativar 2FA</Button>
              </div>
            </div>
          </CartaoDeSecao>

          {/* Preferências */}
          <CartaoDeSecao id="preferencias" icon={Sliders} corIcone={styles.iconeRoxo} titulo="Preferências" subtitulo="Personalize sua experiência na plataforma">
            <div className={styles.preferencias}>
              <div className={styles.campo}>
                <label className={styles.label}>Idioma Principal</label>
                <div className={styles.seletorWrapper}>
                  <Globe size={16} className={styles.seletorIcone} />
                  <select className={styles.seletor}>
                    <option>Português (Brasil)</option>
                    <option>English (US)</option>
                    <option>Español</option>
                  </select>
                  <ChevronRight size={16} className={styles.seletorSeta} />
                </div>
              </div>

              <div className={styles.campo}>
                <label className={styles.label}>Fuso Horário</label>
                <div className={styles.seletorWrapper}>
                  <Clock size={16} className={styles.seletorIcone} />
                  <select className={styles.seletor}>
                    <option>(GMT-03:00) Horário de Brasília</option>
                    <option>(GMT-04:00) Manaus</option>
                    <option>(GMT+00:00) UTC</option>
                  </select>
                  <ChevronRight size={16} className={styles.seletorSeta} />
                </div>
              </div>

              <div className={styles.zonaPerigo}>
                <div className={styles.caixaPerigo}>
                  <h4 className={styles.tituloPerigo}>Zona de Perigo</h4>
                  <p className={styles.descricaoPerigo}>Uma vez que você exclui sua conta, não há volta. Por favor, tenha certeza.</p>
                  <Button variant="danger">Excluir Conta Permanentemente</Button>
                </div>
              </div>
            </div>
          </CartaoDeSecao>

        </div>
      </div>
    </div>
  );
}
