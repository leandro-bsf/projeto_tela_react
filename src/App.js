
import './App.css';
import SwitchToggle from './components/SwitchToggle';
import { useState } from 'react';
function App() {
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
      <div className="setting">
      <div className='title_button'>
        <p>Bloquear Botão Direito</p>
        <SwitchToggle
          id="blockRightClick"
          isOn={settings.blockRightClick}
          handleToggle={() => toggleSetting('blockRightClick')}
        />
        </div>
        <span>Cancela o botão do usuário malicioso</span>
      </div>
      <div className="setting">
        <div className='title_button'>
        <p>Proteja as Imagens</p>
        <SwitchToggle
          id="protectImages"
          isOn={settings.protectImages}
          handleToggle={() => toggleSetting('protectImages')}
        />
        </div>
        <span>Cancela o botão do usuário malicioso</span>
       
      </div>
      <div className="setting">

      <div className='title_button'>
        <p>Bloquear Atalhos Maliciosos</p>
        <SwitchToggle
          id="blockMaliciousShortcuts"
          isOn={settings.blockMaliciousShortcuts}
          handleToggle={() => toggleSetting('blockMaliciousShortcuts')}
        />
        </div>
        <span>Cancela o botão do usuário malicioso</span>
      </div>
      <div className="setting">
      <div className='title_button'>
        <p>Proteger Conteúdo</p>
        <SwitchToggle
          id="protectContent"
          isOn={settings.protectContent}
          handleToggle={() => toggleSetting('protectContent')}
        />
        </div>
        <span>Cancela o botão do usuário malicioso</span>
      </div>

      <div className="setting">
      <div className='title_button'>
        <p>Bloquear Aplicativos Espiões</p>
        <SwitchToggle
          id="blockSpyApps"
          isOn={settings.blockSpyApps}
          handleToggle={() => toggleSetting('blockSpyApps')}
        />
        </div>
        <span>Cancela o botão do usuário malicioso</span>
      </div>

      <div className="setting">
      <div className='title_button'>
        <p>Bloquear Extensão de Terceiros</p>
        <SwitchToggle
          id="blockThirdPartyExtensions"
          isOn={settings.blockThirdPartyExtensions}
          handleToggle={() => toggleSetting('blockThirdPartyExtensions')}
        />
        </div>
        <span>Cancela o botão do usuário malicioso</span>
      </div>

      <div className="setting">
      <div className='title_button'>
        <p>Bloquear Compra Falsa</p>
        <SwitchToggle
          id="blockFakePurchase"
          isOn={settings.blockFakePurchase}
          handleToggle={() => toggleSetting('blockFakePurchase')}
        />
        </div>
        <span>Cancela o botão do usuário malicioso</span>
      </div>
      <div className="setting">
      <div className='title_button'>
        <p>Bloquear Modo Desenvolvedor</p>
        <SwitchToggle
          id="blockDevMode"
          isOn={settings.blockDevMode}
          handleToggle={() => toggleSetting('blockDevMode')}
        />
        </div>
        <span>Cancela o botão do usuário malicioso</span>
      </div>
    </div>
  </div>
  );
}

export default App;
