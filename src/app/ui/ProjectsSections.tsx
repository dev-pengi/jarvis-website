import { FC } from "react";
import Container from "../components/Container";

const categories = [
  { label: "Supervision", color: "#FFB4D3" },
  {
    label: "Dashboard",
    color: "#FFC24C ",
  },
  {
    label: "Plannification",
    color: "#D387F7",
  },
  {
    label: "CRM",
    color: "#77E6FF",
  },
  {
    label: "Intervention",
    color: "#23C9DE",
  },
  {
    label: "RH",
    color: "#FF9E9E",
  },
];

const ProjectsSections: FC = () => {
  return (
    <section className="pt-16">
      <Container>
        <div className="relative text-[54px] font-bold tracking-[1px] text-center">
          <img
            src="/three-stars.png"
            alt=""
            className="absolute left-[50px] -top-3"
          />
          <h2 className="relative monda">Prêt à répondre à chaque exigence</h2>
        </div>
        <div className="mt-11">
          <div className="flex justify-center flex-wrap gap-x-[74px] gap-y-8 max-w-[900px] mx-auto">
            {categories.map((category) => (
              <div
                key={category.label}
                className="flex py-2 px-6 bg-darkblue rounded-full monsterrat font-semibold text-lg"
                style={{
                  color: category.color,
                }}
              >
                {category.label}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <div className="relative w-full">
            <img src="projects-frame.png" alt="" className="w-full" />
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto text-[40px] h-max font-bold text-center">
              <p>Révolutionnez vos plannings avec</p>
              <p>l'automatisation et</p>
              <p>l'optimisation boostées par l'IA</p>
            </div>
            <div className="absolute bg-yellow left-0 right-0 mx-auto w-max -bottom-6 py-1.5 px-6 border-[4px] border-black border-solid rounded-full text-lg font-bold monsterrat">
              10+ fonctionnalités puissantes pour propulser la gestion de votre
              entreprise
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSections;
