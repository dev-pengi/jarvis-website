import { FC } from "react";
import Container from "../components/Container";

const Plans: FC = () => {
  return (
    <section className="pt-32">
      <Container>
        <h2 className="text-5xl font-bold poppins text-center mx-auto max-w-[635px]">
          Choisissez le plan qui vous correspond
        </h2>
        <p className="text-lg mt-8 max-w-[600px] roboto text-center mx-auto text-gray-3">
          Des plans tarifaires adaptés à chaque étape de la croissance de votre
          entreprise. Essayez gratuitement pendant 14 jours. Aucune carte de
          crédit requise.
        </p>
        <div className="flex justify-center gap-8 mt-16">
          div
        </div>
      </Container>
    </section>
  );
};

export default Plans;
