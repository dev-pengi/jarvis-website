import { FC } from "react";
import Container from "../components/Container";
import clsx from "clsx";

const benefitsCards = [
  {
    title: "Centre de Supervision",
    detail:
      "Gardez le contrôle total de vos opérations en temps réel grâce à un tableau de bord intuitif qui centralise toutes les informations clés.",
    extra: [
      "Suivi en temps réel des équipes, des tâches et des opérations de sécurité.",
      "Signalement des incidents et gestion des événements avec des rapports d’activité personnalisables.",
      "Supervision multi-sites pour une gestion optimisée sur plusieurs emplacements.",
    ],
  },
  {
    title: "CRM",
    detail:
      "Fidélisez vos clients et boostez vos ventes avec un CRM qui centralise vos interactions, simplifie le suivi et personnalise vos relations.",
    extra: [
      "Gestion complète des clients : acquisition de prospects, qualification et fidélisation.",
      "Outils pour gérer les opportunités, les contrats et les suivis.",
      "Rapports multi-niveaux pour optimiser la satisfaction client et l’engagement à long terme.",
    ],
  },
  {
    title: "Analytique Avancée",
    detail:
      "Obtenez des analyses précises grâce aux rapports automatisés, aux indicateurs de performance (KPI) et à l’intégration de l’IA pour des prévisions stratégiques.",
    extra: [
      "Rapports automatisés avec indicateurs de performance clés (KPI) et tableaux de bord.",
      "Suivi des coûts et des revenus avec analyses financières détaillées.",
      "Intégration de l’intelligence artificielle pour des insights prédictifs.",
    ],
  },
  {
    title: "Plannification & RH",
    detail:
      "Automatisez la planification des horaires, assurez la conformité des employés et facilitez la gestion des visiteurs et travailleurs isolés avec des outils intelligents.",
    extra: [
      "Planification des horaires avec suivi des entrées/sorties et validation de conformité.",
      "Gestion des visiteurs et intégration avec les systèmes de protection des travailleurs isolés.",
      "Automatisation de l’attribution des équipes et gestion des imprévus.",
    ],
  },
  {
    title: "Innovations techniques",
    detail:
      "Profitez d’une compatibilité sur PC, tablette et mobile, d’une intégration API fluide et d’une communication simplifiée avec les employés.",
    extra: [
      "Compatibilité sur tous les appareils (PC, tablette, mobile).",
      "Support API pour une intégration fluide avec les systèmes existants.",
      "Communication via WhatsApp pour simplifier les interactions avec les employés.",
    ],
  },
];

const BenefitsSection: FC = () => {
  return (
    <section className="pt-32">
      <Container>
        <div className="flex flex-col gap-16 ">
          {benefitsCards.map((card, index) => (
            <div
              className={clsx(
                "w-full flex flex-col",
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              )}
              key={card.title}
            >
              <div
                className={clsx(
                  "w-full flex",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                <div
                  className={clsx(
                    "bg-accent/10 w-full max-w-[853px] lg:h-[387px] md:h-[327px] flex flex-col items-start justify-start pb-9 sm:pt-0 pt-9",
                    index % 2 === 0
                      ? "rounded-ee-[260px] md:pl-16 pl-4"
                      : "rounded-es-[260px] md:pr-20 pr-6 items-end justify-end pb-16"
                  )}
                >
                  <div className="flex-1" />
                  <h3
                    className={clsx(
                      "lg:text-[56px] md:text-[40px] text-[30px] font-semibold text-gray-2 text-start",
                      index % 2 !== 0 && "w-full max-w-[min(512px,75%)] text-start"
                    )}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={clsx(
                      "poppins font-normal text-gray-2 lg:text-2xl md:text-xl text-base mt-8 max-w-[min(512px,70%)]",
                      index % 2 !== 0 && "sm:text-start text-end"
                    )}
                  >
                    {card.detail}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] justify-center items-center gap-6 mt-16">
                {card.extra.map((extra, index) => (
                  <div
                    key={index}
                    className="border border-solid border-gray-2 px-[9.5px] py-4 flex items-center gap-6 sm:h-[112px] rounded-2xl"
                  >
                    <div className="border-[3px] border-solid border-accent/70 text-accent/70 min-w-[80px] h-[80px] flex items-center justify-center rounded-full font-bold text-3xl poppins">
                      0{index + 1}
                    </div>
                    <p className="poppins font-normal text-[15px] text-gray-2">
                      {extra}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
