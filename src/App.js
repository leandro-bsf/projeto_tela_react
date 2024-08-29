
import './App.css';
import SwitchToggle from './components/SwitchToggle';
import { useState } from 'react';
import icone_suporte  from './imagens/icone_suporte.png'
function App() {
  const settingsData = [
    {
      id: "blockRightClick",
      title: "Bloquear Botão Direito",
      description: "Restringe o usuário de usar atalhos maliciosos para roubar conteúdo",
    },
    {
      id: "protectImages",
      title: "Proteja as Imagens",
      description: "Bloquear Aplicativos Espiões e Aplicativos de Rastreamento e Monitoramento",
    },
    {
      id: "blockMaliciousShortcuts",
      title: "Bloquear Atalhos Maliciosos",
      description: "Bloquear Compra Falsa no seu Ads",
    },
    {
      id: "protectContent",
      title: "Proteger Conteúdo",
      description: "Bloqueia pessoas maliciosas de roubarem suas imagens",
    },
    {
      id: "blockSpyApps",
      title: "Bloquear Aplicativos Espiões",
      description: "Bloqueia seu conteúdo para não ser plagiado",
    },
    {
      id: "blockThirdPartyExtensions",
      title: "Bloquear Extensão de Terceiros",
      description: "Extensões Maliciosas para cópia de Conteúdo",
    },
    {
      id: "blockFakePurchase",
      title: "Bloquear Compra Falsa",
      description: "Não permite o usuário acessar o modo desenvolvedor para não copiar seu produto",
    },
    {
      id: "blockDevMode",
      title: "Bloquear Modo Desenvolvedor",
      description: "Cancela o botão do usuário malicioso",
    },
  ];
  const [settings, setSettings] = useState({
    blockRightClick: false,
    protectImages: true,
    blockMaliciousShortcuts: true,
    protectContent: false,
    blockSpyApps: true,
    blockThirdPartyExtensions: false,
    blockFakePurchase: true,
    blockDevMode: false,
  });

  const toggleSetting = (key) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: !prevSettings[key]
    }));
  };
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Nossa ferramenta otimiza seu tema?',
      answer: 'Sim, nossa ferramenta otimiza seu tema bloqueando extensões de terceiros...'
    },
    {
      question: 'A Fire Protect protege minha loja contra o quê?',
      answer: 'A Fire Protect protege sua loja contra...'
    },
    {
      question: 'Vocês têm um atendimento personalizado?',
      answer: 'Sim, oferecemos um atendimento personalizado...'
    },
    {
      question: 'Eu tive um problema com o aplicativo. O que faço?',
      answer: 'Se você teve algum problema com o aplicativo, entre em contato...'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="app">
      <div className="container">
       <div className="header">
        <h1>Olá Seja bem-vindo ao Fire Protect!</h1>
        <p>Escolha logo abaixo os recursos que você deseja ativar ou desativar.</p>
       </div>
      <div className="content">
        <p>Ative todos os recursos de uma vez com os botões abaixo</p>
        <div className="buttons">
          <button className="enable-button">Habilitar todos</button>
          <button className="disable-button">Desativar tudo</button>
        </div>
      </div>
    </div>

    <div className="settings">
      {settingsData.map((setting) => (
        <div className="setting" key={setting.id}>
          <div className="title_button">
            <p>{setting.title}</p>
            <SwitchToggle
              id={setting.id}
              isOn={settings[setting.id]}
              handleToggle={() => toggleSetting(setting.id)}
            />
          </div>
          <span>{setting.description}</span>
        </div>
      ))}
    </div>

  <div className='divisao'></div>
  <div className='div-faq'>
  
  
    <div className="faq-container">
    <h1>Perguntas Frequentes (FAQs) 📝</h1>

      {faqs.map((faq, index) => (
        <div key={index}>
          
          <button 
            onClick={() => toggleFAQ(index)} 
            className="faq-button"
          >
            {faq.question} {openIndex === index ? '▲' : '▶'}
          </button>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className='div-suporte'>
      <img className='icone_suporte' src={icone_suporte}  alt="icone_suporte"/>

        <h1>Suporte e Feedback 📞</h1>
      <span>
      Tem alguma dúvida ou precisa de ajuda? Estamos aqui para você! Clique no botão abaixo para obter suporte imediato. Seu feedback é muito importante para nós. 

      Queremos ouvir suas sugestões e melhorar continuamente nossos serviços. Obrigado por escolher a Fire Protect!
      </span>
       <button className='button_suporte'>Obter suporte</button>
    </div>

  </div>
  </div>
  );
}

export default App;
