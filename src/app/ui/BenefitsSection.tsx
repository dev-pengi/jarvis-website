import { FC } from "react";
import Container from "../components/Container";
import clsx from "clsx";

const benefitsCards = [
  {
    title: "Centre de Supervision",
    detail:
      "Gardez le contrôle total de vos opérations en temps réel grâce à un tableau de bord intuitif qui centralise toutes les informations clés.",
    extra: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
    ],
  },
  {
    title: "CRM",
    detail:
      "Fidélisez vos clients et boostez vos ventes avec un CRM qui centralise vos interactions, simplifie le suivi et personnalise vos relations.",
    extra: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
    ],
  },
  {
    title: "Ressources Humaines",
    detail:
      "Gérez vos équipes avec facilité : recrutement, paie, suivi des performances et bien plus, tout en un seul endroit.",
    extra: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
    ],
  },
  {
    title: "Plannification",
    detail:
      "Simplifiez la gestion de vos projets et activités avec des outils de planification efficaces, conçus pour optimiser votre productivité.",
    extra: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
    ],
  },
  {
    title: "Gestion de Stock",
    detail:
      "Ne perdez jamais de vue vos inventaires : suivez vos stocks, anticipez vos besoins et évitez les ruptures grâce à un système intelligent.",
    extra: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
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
                    "bg-accent/10 w-full max-w-[853px] h-[387px] flex flex-col items-start justify-start pb-9",
                    index % 2 === 0
                      ? "rounded-ee-[260px] pl-16"
                      : "rounded-es-[260px] pr-20 items-end justify-end pb-16"
                  )}
                >
                  <div className="flex-1" />
                  <h3
                    className={clsx(
                      "text-[56px] font-semibold text-gray-2 text-start",
                      index % 2 !== 0 && "w-full max-w-[512px] text-start"
                    )}
                  >
                    {card.title}
                  </h3>
                  <p className="poppins font-normal text-gray-2 text-2xl mt-8 max-w-[512px]">
                    {card.detail}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-6 mt-16">
                {card.extra.map((extra, index) => (
                  <div
                    key={index}
                    className="border border-solid border-gray-2 px-8 py-4 flex items-center gap-6 max-w-[421px] rounded-2xl"
                  >
                    <div className="border-[3px] border-solid border-accent/70 text-accent/70 min-w-[80px] h-[80px] flex items-center justify-center rounded-full font-bold text-3xl poppins">
                      0{index + 1}
                    </div>
                    <p className="poppins font-normal text-gray-2">{extra}</p>
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
