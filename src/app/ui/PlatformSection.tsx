import { FC } from "react";
import Container from "../components/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const keywords = [
  "Menagment de stock",
  "Planification",
  "Rapport",
  "Facturation",
];

const PlatformSection: FC = () => {
  return (
    <section className="pt-32">
      <Container>
        <div className="relative text-[54px] font-bold tracking-[1px] text-center">
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
          <h2 className="relative monda">
            Tous les outils réunis sur une seule plateforme !
          </h2>
        </div>
        <div className="mt-6 flex items-center justify-center gap-8">
          <div className="text-yellow font-semibold text-lg monsterrat">
            Ressource Humaine
          </div>
          {keywords.map((keyword) => (
            <div
              key={keyword}
              className="text-darkerblue font-semibold text-lg monsterrat"
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
