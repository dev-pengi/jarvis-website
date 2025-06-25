import { FC } from "react";
import Container from "../components/Container";

const Navbar: FC = () => {
  return (
    <nav className="px-3">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-8">
            <img src="/logo.png" alt="logo" className="h-16 rounded-md" />
            <span className="text-xl text-gray-3 font-black uppercase monsterrat">
              Jarvis
            </span>
          </div>
          <div className="lg:flex hidden items-center space-x-11">
            <a href="/#" className="text-gray-3 hover:text-gray-1 font-semibold">
              Home
            </a>
            <a
              href="/#about"
              className="text-gray-3 hover:text-gray-1 font-semibold"
            >
              About
            </a>
            <a
              href="/#services"
              className="text-gray-3 hover:text-gray-1 font-semibold"
            >
              Services
            </a>
            <a
              href="/#pricing"
              className="text-gray-3 hover:text-gray-1 font-semibold"
            >
              Pricing
            </a>
            <a
              href="/#contact"
              className="text-gray-3 hover:text-gray-1 font-semibold"
            >
              Contact
            </a>
          </div>
          <a
            href="https://app.extjarvis.net"
            // target="_blank"
            className="bg-[#243241] rounded-xl text-lg monsterrat font-black text-white px-[20px] py-[7px] hover:opacity-85 duration-100"
          >
            Login
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
