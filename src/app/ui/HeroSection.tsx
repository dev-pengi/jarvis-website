import { FC } from "react";
import Container from "../components/Container";

const HeroSection: FC = () => {
  return (
    <>
      <section className="pt-32">
        <Container>
          <div className="relative">
            <h1 className="relative monda lg:text-7xl md:text-5xl text-4xl font-bold tracking-[1px] text-center">
              Jarvis : l'outil de gestion digital qui transforme votre
              entreprise pour plus d'efficacité et de performance
            </h1>
          </div>x
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
