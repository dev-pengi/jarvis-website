import { FC } from "react";
import Container from "../components/Container";

const keywords = ["RH", "Gestion des stocks", "Planification", "Rapport"];

const PlatformSection: FC = () => {
  return (
    <section className="pt-32">
      <Container>
        <div className="relative">
          <img
            src="/two-stars.png"
            alt=""
            className="absolute left-[30px] -top-12"
          />
          <img
            src="/two-stars.png"
            alt=""
            className="absolute right-[80px] bottom-4"
          />
          <h2 className="relative monda lg:text-[54px] md:text-[40px] text-[33px]  font-bold tracking-[1px] text-center">
            Tous vos outils rassemblés sur une seule plateforme pour une gestion
            simplifiée{" "}
          </h2>
        </div>
        <div className="mt-6 flex items-center justify-center flex-wrap gap-x-8 gap-y-2">
          <div className="text-yellow font-semibold text-lg monsterrat  w-max">
            Facturation
          </div>
          {keywords.map((keyword) => (
            <div
              key={keyword}
              className="text-darkerblue font-semibold text-lg monsterrat w-max"
            >
              {keyword}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <img
            src="/platform-screenshot.png"
            alt="Jarvis Platform screenshot"
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
};

export default PlatformSection;
