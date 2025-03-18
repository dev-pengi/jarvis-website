"use client";
import { FC, useState } from "react";
import Container from "../components/Container";

const ContactSection: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <section className="pt-32">
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
            <h2 className="text-center font-bold mb-6 text-4xl">
              Visit <span className="text-[#FFA800]">us</span>
            </h2>
            <div className="mb-4">
              <img src="/map.png" alt="map" className="w-full h-auto" />
            </div>
            <ul className="space-y-2">
              <li>NYC, United States</li>
              <li>0764471821</li>
              <li>projet@extjarvis.fr</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="twitter">
                @
              </a>
              <a href="#" aria-label="instagram">
                @
              </a>
              <a href="#" aria-label="youtube">
                @
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
