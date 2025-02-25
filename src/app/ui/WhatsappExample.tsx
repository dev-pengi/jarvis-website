import { FC } from "react";
import Container from "../components/Container";

const WhatsappScreenshot: FC = () => {
  return (
    <section className="pt-32">
      <Container>
      <div className="flex items-center justify-center">
        <img src="whatsapp-iphone-chat-example.png" />
        <div>
          <h3 className="font-medium text-lg max-w-[390px] roboto">
            Un message peut etre envouer via Jarvis sur le reseau WhatsApp a
            plusieurs agents.
          </h3>

          <img src="whatsapp-example-chart.png" className="mt-16" />
        </div>
      </div>
      </Container>
    </section>
  );
};

export default WhatsappScreenshot;
