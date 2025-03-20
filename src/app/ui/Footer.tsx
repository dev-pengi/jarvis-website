import { FC } from "react";
import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialMedia = [
  {
    icon: faXTwitter,
    href: "https://x.com",
    color: "#c4c4c444",
  },
  {
    icon: faInstagram,
    href: "https://instagram.com",
    color: "#E1306C94",
  },
  {
    icon: faFacebook,
    href: "https://facebook.com",
    color: "#1877F294",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-darkblue mt-12 text-white py-8">
      <Container>
        <div className="flex gap-8 items-center justify-between flex-wrap">
          <div className="flex items-center space-x-8">
            <img src="/logo.png" alt="logo" className="h-16 rounded-md" />
            <span className="text-xl font-black uppercase monsterrat">
              Jarvis
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-16">
            {/* <div className="flex items-center gap-[56px] text-lg font-semibold">
              <a href="/platform">Contact Us</a>
            </div> */}
            <div className="flex items-center gap-5">
              {socialMedia.map((social) => (
                <a
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full text-base"
                  style={{ backgroundColor: social.color }}
                  href={social.href}
                  key={social.href}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
