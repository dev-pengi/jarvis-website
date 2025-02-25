import { FC } from "react";
import Container from "../components/Container";

const categories = [
  { label: "CRM", color: "#FFB4D3" },
  {
    label: "Planification",
    color: "#23C9DE",
  },
  {
    label: "HR",
    color: "#D387F7",
  },
  {
    label: "Main courante",
    color: "#D387F7",
  },
  {
    label: "Dashboard",
    color: "#23C9DE",
  },
  {
    label: "Supervision",
    color: "#D387F7",
  },
  {
    label: "Intervention",
    color: "#FF9E9E",
  },
];

const ProjectsSections: FC = () => {
  return (
    <section className="pt-16">
      <Container>
        <div className="relative">
          <h2 className="relative monda lg:text-[54px] md:text-[40px] text-[33px]  font-bold tracking-[1px] text-center">
            Prêt à statisfaire toutes vos exigences
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
          <div className="relative w-full max-w-[1140px] aspect-[1140/493] bg-[#6492B4] rounded-[30px]">
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto lg:leading-[50px] lg:text-[40px] md:leading-[40px] md:text-[30px] xsm:text-xl text-base h-max text-center monda font-bold">
              <p>Révolutionnez vos plannings avec</p>
              <p>l'automatisation et</p>
              <p>l'optimisation boostées par l'IA</p>
            </div>
            <div className="absolute bg-yellow left-0 right-0 mx-auto w-full max-w-max md:-bottom-6 xsm:-bottom-10 -bottom-16 py-1.5 px-6 border-[4px] border-black border-solid rounded-full font-bold monsterrat">
              <p className="break-words text-center md:text-lg xsm:text-base text-[15px]">
                Des fonctionnalités puissantes pour propulser la gestion de
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
