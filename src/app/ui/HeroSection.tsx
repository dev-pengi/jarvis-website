import { FC } from "react";
import Container from "../components/Container";

const HeroSection: FC = () => {
  return (
    <>
      <section className="pt-32">
        <Container>
          <div className="relative text-7xl font-bold tracking-[1px] text-center">
            <img
              src="/three-stars.png"
              alt=""
              className="absolute left-[50px] -top-12"
            />
            <img
              src="/three-stars.png"
              alt=""
              className="absolute right-[50px] -top-12"
            />
            <h1 className="relative monda">
              Optimisez vos opérations en toute simplicité
            </h1>
          </div>
          <div className="text-[26px] mt-8 font-medium text-gray-3 text-center flex flex-col items-center justify-center leading-[46px]">
            <p className="montserrat">
              Une plateforme tout-en-un pour l'analyse en temps réel,
            </p>
            <p className="montserrat">la gestion des ressources</p>
            <p className="">et l'amélioration continue sur plusieurs sites.</p>
          </div>
          <div className="relative flex justify-center mt-8">
            <button
              className="relative py-4 px-12 monsterrat rounded-2xl bg-accent text-white font-bold text-lg"
              style={{
                boxShadow: "0px 9px 44px 0 #FFCF0132",
              }}
            >
              Get started
              <img
                src="/three-stars.png"
                alt=""
                className="absolute -right-[100px] -top-6"
              />
            </button>
          </div>
          <div className="flex items-center justify-center mt-32">
            <img
              src="/arrow-down.png"
              alt=""
              className="animate-bounce w-5 h-5"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
