"use client";
import { FC, useState } from "react";
import Container from "../components/Container";

const ContactSection: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <section className="pt-32" id="contact">
      <Container>
        <div className="flex flex-col md:flex-row bg-white shadow-light max-w-[1000px] mx-auto rounded overflow-hidden">
          <div className="w-full md:w-1/2 px-12 py-24">
            <h2 className="text-2xl font-bold mb-6">Contact us</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-3 border-solid rounded py-2 px-4 "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-3 border-solid rounded py-2 px-4 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                className="w-full border border-gray-3 border-solid rounded py-2 px-4  h-32"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={newsletter}
                  className=""
                  onChange={() => setNewsletter(!newsletter)}
                />
                <span>I would like to receive the newsletter.</span>
              </label>
            </div>
            <button className="bg-accent rounded-lg text-white px-4 py-2 mt-12">
              Submit
            </button>
          </div>
          <div className="w-full md:w-1/2 px-8 bg-[#6492B4]/90 text-white py-24">
            <h2 className="text-center font-bold text-4xl">
              Visit <span className="text-[#FFA800]">us</span>
            </h2>
            {/* <a
              className=""
              href="https://www.google.fr/maps/place/64+Av.+Marinville,+94100+Saint-Maur-des-Foss%C3%A9s,+France/@48.8080856,2.4756554,17z/data=!3m1!4b1!4m6!3m5!1s0x47e60ce6d540cdcf:0x917912d5123fe71a!8m2!3d48.8080821!4d2.4782303!16s%2Fg%2F11l6h9s110?entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <img src="/map.png" alt="map" className="w-full h-auto" />
            </a> */}
            <ul className="mt-7 space-y-2">
              <li>
                64 AVENUE DE MARINVILLE SAINT-MAUR-DES-FOSSES 94100 France
              </li>
              <li>+33 7 64 47 18 21</li>
              <li>contact@extjarvis.net</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
