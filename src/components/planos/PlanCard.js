import React from 'react';
import './planCard.css'
import Check from '../../imagens/check.png'
export default function PlansList() {
    const plans = [
        {
          name: "Plano Básico",
          price: "9.90",
          features: [
            "Bloquear Botão Direito",
            "Proteja As Imagens",
            "Bloquear Atalhos Maliciosos",
            "Proteger O Conteúdo",
            "Suporte Via E-Mail",
          ],
        },
        {
          name: "Plano Padrão",
          price: "25.90",
          features: [
            "Bloquear Botão Direito",
            "Proteja As Imagens",
            "Bloquear Extensão De Terceiros",
            "Bloquear Atalhos Maliciosos",
            "Proteger O Conteúdo",
            "Bloquear Aplicativos Espiões",
            "Suporte Via E-Mail",
            "Suporte Via Chat - 24 Horas",
          ],
          recommended: true, // Marca esse plano como recomendado
        },
        {
          name: "Plano Premium",
          price: "47.90",
          features: [
            "Bloquear Botão Direito",
            "Proteja As Imagens",
            "Bloquear Extensão De Terceiros",
            "Bloquear Atalhos Maliciosos",
            "Proteger O Conteúdo",
            "Bloquear Aplicativos Espiões",
            "Bloquear Compra Falsa",
            "Bloquear Modo Desenvolvedor",
            "Suporte Via E-Mail",
          ],
        },
      ];
    return (
      <div className="plans-container">


        {plans.map((plan, index) => (
          
          <div key={index} className={`card ${plan.recommended ? "recommended" : ""}`}>
            <h2>{plan.name}</h2>
            <p className="price">${plan.price}/mês</p>
            <button className={`button_assinar ${plan.recommended ? "butto_recommended" : ""}`}>Assinar agora</button>
            <ul>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}> <img src={Check} className='check' /> {feature}</li>
              ))}
            </ul>
           
          </div>
        ))}
      </div>
    );
  }