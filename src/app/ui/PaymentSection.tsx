import { FC } from "react";
import Container from "../components/Container";
import DrawnLine from "../assets/DrawnLine";

const PaymentSection: FC = () => {
  return (
    <section className="pt-32">
      <Container>
        <div className="relative max-w-[600px] mx-auto">
          <div className="absolute -bottom-4 right-0 left-0 w-max mx-auto ">
            <DrawnLine />
          </div>
          <h2 className="relative poppins text-5xl font-bold text-center">
            Choisissez le plan qui vous correspond
          </h2>
        </div>
        <p className="mt-9 max-w-[600px] text-center roboto text-lg text-gray-3 mx-auto">
          Des plans tarifaires adaptés à chaque étape de la croissance de votre
          entreprise.
        </p>

        <div className="flex items-center justify-center gap-8 mt-16">
          <div className="w-full max-w-[364px] bg-[#6492B4]/40 rounded-[20px] py-[20px] px-[26px]">
            <div>
              <div className="bg-white py-[5px] px-[20px] w-max text-[14.5px] rounded-md poppins">
                Plan Mensuel
              </div>
              <p className="mt-[15px] font-light text-[13px] poppins">
                Idéal pour ceux qui recherchent de la flexibilité. Payez chaque
                mois sans engagement à long terme.
              </p>
            </div>
            <div className="my-[28px] bg-[#001C80] h-[1px] w-full" />
            <div>
              <h3 className="text-[66px] font-semibold tracking-tight text-[#304C69] poppins leading-[72px]">
                30€
              </h3>
              <span className="block poppins font-semibold text-[14.5px]">
                Par mois
              </span>
            </div>
            <div className="my-[28px] bg-[#001C80] h-[1px] w-full" />
            <a href="https://dashboard.extjarvis.fr" className="bg-black py-[7px] w-[100%] rounded roboto text-[14.5px] font-bold text-white flex justify-center">
              <span>Début</span>
            </a>
          </div>

          <div className="relative w-full max-w-[364px] bg-[#6492B4]/40 rounded-[20px] py-[20px] px-[26px] overflow-hidden">
            <div className="absolute right-0 top-0 px-[12px] leading-[38px] bg-[#F9D783] roboto font-normal text-[14px] rounded-tl-xl rounded-bl-xl">
              -10 %
            </div>

            <div>
              <div className="bg-white py-[5px] px-[20px] w-max text-[14.5px] rounded-md poppins">
                Plan Annuel
              </div>
              <p className="mt-[15px] font-light text-[13px] poppins">
                Économisez 10 % en payant à l’année ! Idéal pour un engagement
                longue durée à moindre coût.
              </p>
            </div>
            <div className="my-[28px] bg-[#001C80] h-[1px] w-full" />
            <div>
              <h3 className="text-[66px] font-semibold tracking-tight text-[#304C69] poppins leading-[72px]">
                324€
              </h3>
              <span className="block poppins font-semibold text-[14.5px]">
                Par ans
              </span>
            </div>
            <div className="my-[28px] bg-[#001C80] h-[1px] w-full" />
            <a href="https://dashboard.extjarvis.fr" className="bg-black py-[7px] w-[100%] rounded roboto text-[14.5px] font-bold text-white flex justify-center">
              <span>Début</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaymentSection;
