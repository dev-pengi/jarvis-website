import { FC } from "react";
import Container from "../components/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const keywords = [
  "RH",
  "Gestion des stocks",
  "Planification",
  "Rapport",
];

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
        <div className="mt-11 flex items-center justify-center">
          <a
            href="/"
            className="flex items-center gap-3 bg-lightyellow/15 hover:bg-lightyellow/30 duration-75 text-yellow py-4 px-12 rounded-2xl"
          >
            <FontAwesomeIcon icon={faPlay} />
            Watch video
          </a>
        </div>
      </Container>
    </section>
  );
};

export default PlatformSection;
