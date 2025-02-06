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
        <div className="relative">
          <img
            src="/three-stars.png"
            alt=""
            className="absolute left-[50px] -top-3"
          />
          <h2 className="relative monda lg:text-[54px] md:text-[40px] text-[33px]  font-bold tracking-[1px] text-center">
            Prêt à répondre à chaque exigence
          </h2>
        </div>
        <div className="mt-11">
          <div className="flex justify-center flex-wrap lg:gap-x-[74px] md:gap-x-[54px] gap-x-[20px] lg:gap-y-8 gap-y-6 max-w-[900px] mx-auto">
            {categories.map((category) => (
              <div
                key={category.label}
                className="flex py-2 px-6 bg-darkblue rounded-full monsterrat font-semibold lg:text-lg text-base"
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
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto lg:leading-[50px] lg:text-[40px] md:leading-[40px] md:text-[30px] xsm:text-xl text-base h-max font-bold text-center">
              <p>Révolutionnez vos plannings avec</p>
              <p>l'automatisation et</p>
              <p>l'optimisation boostées par l'IA</p>
            </div>
            <div className="absolute bg-yellow left-0 right-0 mx-auto w-full max-w-max md:-bottom-6 xsm:-bottom-10 -bottom-16 py-1.5 px-6 border-[4px] border-black border-solid rounded-full font-bold monsterrat">
              <p className="break-words text-center md:text-lg xsm:text-base text-[15px]">
                10+ fonctionnalités puissantes pour propulser la gestion de
                votre entreprise
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSections;
